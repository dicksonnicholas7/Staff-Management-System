(function () {
    angular
            .module("ContactApp",[])
            .controller("ContactContoller", createContact);

            function createContact($scope, $http) {
                $scope.createContact = createContact;
                
                getContacts();


                function createContact(contactDetails) {
                    console.log(contactDetails);
                    $http
                            .post('http://localhost:3000/api/contacts/', contactDetails)
                            .then(
                                getContacts()
                            );

                }

                function getContacts() {
                    $http
                        .get('http://localhost:3000/api/contacts/')
                        .then(
                            function (allContacts) {
                                $scope.allContacts = allContacts.data;
                            }
                        );
                }
            }
})();