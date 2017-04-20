angular.module("rtApp").service('mainSrv', function($q, $http) {

      this.getRepData = function(address) {

        return $http.get('/api/data/'+ address)
        .then(function(response){

          var tempObj = {
            city: response.data.normalizedInput.city,
            street: response.data.normalizedInput.line1,
            state: response.data.normalizedInput.state,
            zip: response.data.normalizedInput.zip
          }


          var offices = response.data.offices
          var officials = response.data.officials


          var result = []

          offices.forEach(function (office) {
            office.officialIndices.forEach(function (value) {
              var official = officials[value]
              var contactChannels = officials[value].channels

              if (official.hasOwnProperty('channels')) {
                contactChannels.forEach(function (channel, idx, arr) {
                  if (channel.type == "Facebook") {
                    contactChannels.fbicon = "<i class='fa fa-facebook' aria-hidden='true'></i>"



                    }
                  })
                }
              result.push({
                name: official.name,
                photo: official.photoUrl,
                channels: official.channels,
                officeName: office.name,
                party: official.party,
                phone: official.phones,
                address: official.address,
                url: official.urls,
                email: official.emails

              })


            })
          })

          var representationData = []
          var representationDataObj = response.data.divisions
        

          for (var key in representationDataObj) {
              representationData.push(representationDataObj[key].name)
          }



          return {inputAddress: tempObj, officials: result, data: representationData}
        })
      }


})
