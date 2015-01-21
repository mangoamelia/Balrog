require 'rest_client'
require 'json'

#Build request URL

marketo_instance = "https://516-GHI-083.mktorest.com/" 

#Specify lead id. Lead id is returned when createOrUpdate in marketo_job.rb creates a new lead
leadId = [xxxxxxx]

endpoint = "/rest/v1/leads/" + leadId + "/associate.json"

#Add Access token
auth_token =  "?access_token=" + "abcdefg-1234-5678-9012-hijklmnop123" 

#Replace with cookie id of anonymous lead

#The _mkto_trk cookie value includes an ampersand and needs to be URL encoded to %26 to be processed by the Marketo API. 

cookie_id = "?cookie=" + "id:516-GHI-083%26token:_mch-marketo.com-xxxxxxxxxxxx-xxxxx"

request_url = marketo_instance + endpoint + auth_token + cookie_id

#Make request
response = RestClient.post request_url

#Returns Marketo API response
puts response