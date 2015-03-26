class MarketoJob
  @queue = :marketo

  def self.post(provider,user)
    Resque.enqueue(self, provider, user)
  end

  def self.perform(account_attributes, user_attributes)
    if System::Application.config.three_scale.marketo_enabled
      body = attributes(account_attributes, user_attributes)
      config = System::Application.config.three_scale.marketo
      client = MarketoClient.new(body.to_json, config)
      client.post
    end
  end

  def self.attributes(account_attributes, user_attributes)
    user = user_attributes['user']
    account_activated = (user['state'] ==  'active')
    account = account_attributes['account']
    extra_fields = account['extra_fields']
    {
      action: 'createOrUpdate',
      input:[{
        firstName: user['first_name'],
        lastName: user['last_name'],
        email: user['email'],
        leadSource: 'signup',
        Company: account['org_name'] ,
        MT_account_activated__c: account_activated,
        MT_account_id__c: account['id'],
        MT_user_id__c: user['id'],
        Signup_Source_Detail__c: (extra_fields['Signup_origin'] || 'unknown'),
      }]
    }
  end
end