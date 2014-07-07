/* tslint:disable:no-string-literal - Because we are using Dictionaries */
/* tslint:disable:typedef - Because I do not want to explicitly said "any" */
var tablesPoc;
(function (tablesPoc) {
    "use strict";

    var rawData = {
        "Locations": [
            {
                "Id": "8b678afa-b246-4106-89fa-d445eada1692",
                "Name": "Administration Building",
                "Address": "499 Woodpecker Run",
                "AddressTwo": "",
                "CityName": "New Braunfels",
                "CountyName": "",
                "Country": {
                    "Code": "US",
                    "Label": "UNITED STATES"
                },
                "DevicesCount": 7,
                "UsersCount": 11,
                "PostalCode": "78130",
                "State": {
                    "Code": "TX",
                    "Label": "Texas"
                },
                "LastTestModeAlert": "06/26/2014 19:29:24 +00:00",
                "MapCoordinates": {
                    "Latitude": "28.585166573524769",
                    "Longitude": "-97.99463467964529"
                },
                "Phone": "5554141555",
                "PhoneExtension": "",
                "Dispatchers": [],
                "FloorMapLink": null,
                "FloorMap": null,
                "TestMode": true,
                "HasADeviceThatCanReceiveReverseAlerts": false,
                "Contacts": null,
                "CreatedBy": "00000000-0000-0000-0000-000000000000",
                "CreatedByUser": null,
                "CreatedOnServer": "1/1/0001 12:00:00 AM +00:00",
                "LastModifiedBy": null,
                "LastModifiedByUser": null,
                "LastModifiedOnServer": "1/1/0001 12:00:00 AM +00:00",
                "SendAlertsToAllOrganization": true
            },
            {
                "Id": "20a00941-34b9-4221-a390-d18ea8644e04",
                "Name": "Arts \u0026 Crafts Building",
                "Address": "921 Woodpecker Run",
                "AddressTwo": "Suite 300",
                "CityName": "New Braunfels",
                "CountyName": "",
                "Country": {
                    "Code": "US",
                    "Label": "UNITED STATES"
                },
                "DevicesCount": 62,
                "UsersCount": 35,
                "PostalCode": "78130",
                "State": {
                    "Code": "TX",
                    "Label": "Texas"
                },
                "LastTestModeAlert": "06/30/2014 17:21:28 +00:00",
                "MapCoordinates": {
                    "Latitude": "28.4499594567871",
                    "Longitude": "-96.3036398085938"
                },
                "Phone": "5555555555",
                "PhoneExtension": "",
                "Dispatchers": [],
                "FloorMapLink": null,
                "FloorMap": null,
                "TestMode": true,
                "HasADeviceThatCanReceiveReverseAlerts": true,
                "Contacts": null,
                "CreatedBy": "00000000-0000-0000-0000-000000000000",
                "CreatedByUser": null,
                "CreatedOnServer": "1/1/0001 12:00:00 AM +00:00",
                "LastModifiedBy": null,
                "LastModifiedByUser": null,
                "LastModifiedOnServer": "1/1/0001 12:00:00 AM +00:00",
                "SendAlertsToAllOrganization": false
            },
            {
                "Id": "1480ef9e-2ad3-43b0-946c-c2b5ad1bc3b9",
                "Name": "Daycare",
                "Address": "124 Woodpecker Run",
                "AddressTwo": "",
                "CityName": "New Braunfels",
                "CountyName": "",
                "Country": {
                    "Code": "US",
                    "Label": "UNITED STATES"
                },
                "DevicesCount": 5,
                "UsersCount": 2,
                "PostalCode": "78130",
                "State": {
                    "Code": "TX",
                    "Label": "Texas"
                },
                "LastTestModeAlert": "03/31/2014 21:04:28 +00:00",
                "MapCoordinates": {
                    "Latitude": "28.037402424926758",
                    "Longitude": "-97.03116489897537"
                },
                "Phone": "(963) 258-3214",
                "PhoneExtension": "",
                "Dispatchers": [],
                "FloorMapLink": null,
                "FloorMap": null,
                "TestMode": false,
                "HasADeviceThatCanReceiveReverseAlerts": false,
                "Contacts": null,
                "CreatedBy": "00000000-0000-0000-0000-000000000000",
                "CreatedByUser": null,
                "CreatedOnServer": "1/1/0001 12:00:00 AM +00:00",
                "LastModifiedBy": null,
                "LastModifiedByUser": null,
                "LastModifiedOnServer": "1/1/0001 12:00:00 AM +00:00",
                "SendAlertsToAllOrganization": false
            },
            {
                "Id": "14c5a635-e24e-47e6-8022-5a4538cab9ab",
                "Name": "Gym",
                "Address": "198 Mockingjay Lane",
                "AddressTwo": "Suite 400",
                "CityName": "New Braunfels",
                "CountyName": "",
                "Country": {
                    "Code": "US",
                    "Label": "UNITED STATES"
                },
                "DevicesCount": 15,
                "UsersCount": 12,
                "PostalCode": "78130",
                "State": {
                    "Code": "TX",
                    "Label": "Texas"
                },
                "LastTestModeAlert": "06/23/2014 16:38:00 +00:00",
                "MapCoordinates": {
                    "Latitude": "30.885969705200195",
                    "Longitude": "-99.02094116210938"
                },
                "Phone": "(555) 444-4555",
                "PhoneExtension": "",
                "Dispatchers": [],
                "FloorMapLink": null,
                "FloorMap": null,
                "TestMode": true,
                "HasADeviceThatCanReceiveReverseAlerts": true,
                "Contacts": null,
                "CreatedBy": "00000000-0000-0000-0000-000000000000",
                "CreatedByUser": null,
                "CreatedOnServer": "1/1/0001 12:00:00 AM +00:00",
                "LastModifiedBy": null,
                "LastModifiedByUser": null,
                "LastModifiedOnServer": "1/1/0001 12:00:00 AM +00:00",
                "SendAlertsToAllOrganization": false
            },
            {
                "Id": "9d756f5e-32bd-476c-8c3d-fcd269c37341",
                "Name": "Science Building",
                "Address": "59 Blue Jay Lane",
                "AddressTwo": "",
                "CityName": "New Braunfels",
                "CountyName": "",
                "Country": {
                    "Code": "US",
                    "Label": "UNITED STATES"
                },
                "DevicesCount": 2,
                "UsersCount": 8,
                "PostalCode": "78130",
                "State": {
                    "Code": "TX",
                    "Label": "Texas"
                },
                "LastTestModeAlert": "05/21/2014 14:29:50 +00:00",
                "MapCoordinates": {
                    "Latitude": "28.651949310302734",
                    "Longitude": "-99.4683822631836"
                },
                "Phone": "1234785698",
                "PhoneExtension": "",
                "Dispatchers": [],
                "FloorMapLink": null,
                "FloorMap": null,
                "TestMode": false,
                "HasADeviceThatCanReceiveReverseAlerts": false,
                "Contacts": null,
                "CreatedBy": "00000000-0000-0000-0000-000000000000",
                "CreatedByUser": null,
                "CreatedOnServer": "1/1/0001 12:00:00 AM +00:00",
                "LastModifiedBy": null,
                "LastModifiedByUser": null,
                "LastModifiedOnServer": "1/1/0001 12:00:00 AM +00:00",
                "SendAlertsToAllOrganization": false
            },
            {
                "Id": "a81fbff5-b311-4a4d-bd38-4f3ec83eb626",
                "Name": "Teachers Break Room",
                "Address": "311 Woodpecker Run",
                "AddressTwo": "",
                "CityName": "new braunfels",
                "CountyName": "",
                "Country": {
                    "Code": "US",
                    "Label": "UNITED STATES"
                },
                "DevicesCount": 1,
                "UsersCount": 0,
                "PostalCode": "7813078130",
                "State": {
                    "Code": "TX",
                    "Label": "Texas"
                },
                "LastTestModeAlert": "08/01/2013 00:00:00 +00:00",
                "MapCoordinates": {
                    "Latitude": "28.8498781979084",
                    "Longitude": "-99.36385286152363"
                },
                "Phone": "(444) 444-4444",
                "PhoneExtension": "444",
                "Dispatchers": [],
                "FloorMapLink": null,
                "FloorMap": null,
                "TestMode": false,
                "HasADeviceThatCanReceiveReverseAlerts": false,
                "Contacts": null,
                "CreatedBy": "00000000-0000-0000-0000-000000000000",
                "CreatedByUser": null,
                "CreatedOnServer": "1/1/0001 12:00:00 AM +00:00",
                "LastModifiedBy": null,
                "LastModifiedByUser": null,
                "LastModifiedOnServer": "1/1/0001 12:00:00 AM +00:00",
                "SendAlertsToAllOrganization": false
            },
            {
                "Name": "Teachers Break Room",
                "Address": "711 Woodpecker Run",
                "CityName": "Teachersbreakroomlarge",
                "DevicesCount": 1,
                "UsersCount": 0,
                "State": {
                    "Label": "Texas"
                },
                "LastTestModeAlert": "08/01/2013 00:00:00 +00:00",
                "TestMode": false,
                "HasADeviceThatCanReceiveReverseAlerts": false
            },
            {
                "Name": "",
                "Address": "911 Woodpecker Run",
                "CityName": "",
                "DevicesCount": 1,
                "UsersCount": 0,
                "State": {
                    "Label": "Texas"
                },
                "LastTestModeAlert": "08/01/2013 00:00:00 +00:00",
                "TestMode": false,
                "HasADeviceThatCanReceiveReverseAlerts": false
            },
            {
                "Name": "0904 ORGANIZATION 2(AGENCY POLICE, WITH LINK)",
                "Address": "111 Woodpecker Run",
                "CityName": "Addison122",
                "DevicesCount": 1,
                "UsersCount": 0,
                "State": {
                    "Label": "Tennessee"
                },
                "LastTestModeAlert": "08/01/2013 00:00:00 +00:00",
                "TestMode": false,
                "HasADeviceThatCanReceiveReverseAlerts": false
            },
            {
                "Id": "2b678aff-b246-4106-89fa-d445eada1692",
                "Name": "Administration Building",
                "Address": "499 Woodpecker Run",
                "AddressTwo": "",
                "CityName": "New Braunfels",
                "CountyName": "",
                "Country": {
                    "Code": "US",
                    "Label": "UNITED STATES"
                },
                "DevicesCount": 7,
                "UsersCount": 11,
                "PostalCode": "78130",
                "State": {
                    "Code": "TX",
                    "Label": "Texas"
                },
                "LastTestModeAlert": "06/26/2014 19:29:24 +00:00",
                "MapCoordinates": {
                    "Latitude": "29.449585166573524",
                    "Longitude": "-98.46346796452999"
                },
                "Phone": "5555554141",
                "PhoneExtension": "",
                "Dispatchers": [],
                "FloorMapLink": null,
                "FloorMap": null,
                "TestMode": true,
                "HasADeviceThatCanReceiveReverseAlerts": false,
                "Contacts": null,
                "CreatedBy": "00000000-0000-0000-0000-000000000000",
                "CreatedByUser": null,
                "CreatedOnServer": "1/1/0001 12:00:00 AM +00:00",
                "LastModifiedBy": null,
                "LastModifiedByUser": null,
                "LastModifiedOnServer": "1/1/0001 12:00:00 AM +00:00",
                "SendAlertsToAllOrganization": true
            },
            {
                "Id": "30b00941-34b9-4221-a390-d18ea8644e04",
                "Name": "Arts \u0026 Crafts Building",
                "Address": "821 Woodpecker Run",
                "AddressTwo": "Suite 300",
                "CityName": "New Braunfels",
                "CountyName": "",
                "Country": {
                    "Code": "US",
                    "Label": "UNITED STATES"
                },
                "DevicesCount": 62,
                "UsersCount": 35,
                "PostalCode": "78130",
                "State": {
                    "Code": "TX",
                    "Label": "Texas"
                },
                "LastTestModeAlert": "06/30/2014 17:21:28 +00:00",
                "MapCoordinates": {
                    "Latitude": "29.5495994567871",
                    "Longitude": "-98.2639038085938"
                },
                "Phone": "5555555555",
                "PhoneExtension": "",
                "Dispatchers": [],
                "FloorMapLink": null,
                "FloorMap": null,
                "TestMode": true,
                "HasADeviceThatCanReceiveReverseAlerts": true,
                "Contacts": null,
                "CreatedBy": "00000000-0000-0000-0000-000000000000",
                "CreatedByUser": null,
                "CreatedOnServer": "1/1/0001 12:00:00 AM +00:00",
                "LastModifiedBy": null,
                "LastModifiedByUser": null,
                "LastModifiedOnServer": "1/1/0001 12:00:00 AM +00:00",
                "SendAlertsToAllOrganization": false
            },
            {
                "Id": "1380ef9e-2ad3-43b0-946c-c2b5ad1bc3b9",
                "Name": "Daycare",
                "Address": "324 Woodpecker Run",
                "AddressTwo": "",
                "CityName": "New Braunfels",
                "CountyName": "",
                "Country": {
                    "Code": "US",
                    "Label": "UNITED STATES"
                },
                "DevicesCount": 5,
                "UsersCount": 2,
                "PostalCode": "78130",
                "State": {
                    "Code": "TX",
                    "Label": "Texas"
                },
                "LastTestModeAlert": "03/31/2014 21:04:28 +00:00",
                "MapCoordinates": {
                    "Latitude": "29.550032424926758",
                    "Longitude": "-99.04403189897537"
                },
                "Phone": "(248) 963-3214",
                "PhoneExtension": "",
                "Dispatchers": [],
                "FloorMapLink": null,
                "FloorMap": null,
                "TestMode": false,
                "HasADeviceThatCanReceiveReverseAlerts": false,
                "Contacts": null,
                "CreatedBy": "00000000-0000-0000-0000-000000000000",
                "CreatedByUser": null,
                "CreatedOnServer": "1/1/0001 12:00:00 AM +00:00",
                "LastModifiedBy": null,
                "LastModifiedByUser": null,
                "LastModifiedOnServer": "1/1/0001 12:00:00 AM +00:00",
                "SendAlertsToAllOrganization": false
            },
            {
                "Id": "14c5a635-e24e-47e6-8022-5a4538cab9ab",
                "Name": "Gym",
                "Address": "298 Mockingjay Lane",
                "AddressTwo": "Suite 400",
                "CityName": "New Braunfels",
                "CountyName": "",
                "Country": {
                    "Code": "US",
                    "Label": "UNITED STATES"
                },
                "DevicesCount": 15,
                "UsersCount": 12,
                "PostalCode": "78130",
                "State": {
                    "Code": "TX",
                    "Label": "Texas"
                },
                "LastTestModeAlert": "06/23/2014 16:38:00 +00:00",
                "MapCoordinates": {
                    "Latitude": "28.998869705200195",
                    "Longitude": "-99.32094116210938"
                },
                "Phone": "(555) 555-4444",
                "PhoneExtension": "",
                "Dispatchers": [],
                "FloorMapLink": null,
                "FloorMap": null,
                "TestMode": true,
                "HasADeviceThatCanReceiveReverseAlerts": true,
                "Contacts": null,
                "CreatedBy": "00000000-0000-0000-0000-000000000000",
                "CreatedByUser": null,
                "CreatedOnServer": "1/1/0001 12:00:00 AM +00:00",
                "LastModifiedBy": null,
                "LastModifiedByUser": null,
                "LastModifiedOnServer": "1/1/0001 12:00:00 AM +00:00",
                "SendAlertsToAllOrganization": false
            },
            {
                "Id": "5d656f5e-32bd-476c-8c3d-fcd269c37341",
                "Name": "Science Building",
                "Address": "559 Blue Jay Lane",
                "AddressTwo": "",
                "CityName": "New Braunfels",
                "CountyName": "",
                "Country": {
                    "Code": "US",
                    "Label": "UNITED STATES"
                },
                "DevicesCount": 2,
                "UsersCount": 8,
                "PostalCode": "78130",
                "State": {
                    "Code": "TX",
                    "Label": "Texas"
                },
                "LastTestModeAlert": "05/21/2014 14:29:50 +00:00",
                "MapCoordinates": {
                    "Latitude": "28.951949310302734",
                    "Longitude": "-98.9683822631836"
                },
                "Phone": "1476852398",
                "PhoneExtension": "",
                "Dispatchers": [],
                "FloorMapLink": null,
                "FloorMap": null,
                "TestMode": false,
                "HasADeviceThatCanReceiveReverseAlerts": false,
                "Contacts": null,
                "CreatedBy": "00000000-0000-0000-0000-000000000000",
                "CreatedByUser": null,
                "CreatedOnServer": "1/1/0001 12:00:00 AM +00:00",
                "LastModifiedBy": null,
                "LastModifiedByUser": null,
                "LastModifiedOnServer": "1/1/0001 12:00:00 AM +00:00",
                "SendAlertsToAllOrganization": false
            },
            {
                "Id": "1b678aff-b246-4106-89fa-d445eada1692",
                "Name": "Administration Building",
                "Address": "399 Woodpecker Run",
                "AddressTwo": "",
                "CityName": "New Braunfels",
                "CountyName": "",
                "Country": {
                    "Code": "US",
                    "Label": "UNITED STATES"
                },
                "DevicesCount": 7,
                "UsersCount": 11,
                "PostalCode": "78130",
                "State": {
                    "Code": "TX",
                    "Label": "Texas"
                },
                "LastTestModeAlert": "06/26/2014 19:29:24 +00:00",
                "MapCoordinates": {
                    "Latitude": "28.849585166573524",
                    "Longitude": "-99.76346796452999"
                },
                "Phone": "5555554141",
                "PhoneExtension": "",
                "Dispatchers": [],
                "FloorMapLink": null,
                "FloorMap": null,
                "TestMode": true,
                "HasADeviceThatCanReceiveReverseAlerts": false,
                "Contacts": null,
                "CreatedBy": "00000000-0000-0000-0000-000000000000",
                "CreatedByUser": null,
                "CreatedOnServer": "1/1/0001 12:00:00 AM +00:00",
                "LastModifiedBy": null,
                "LastModifiedByUser": null,
                "LastModifiedOnServer": "1/1/0001 12:00:00 AM +00:00",
                "SendAlertsToAllOrganization": true
            },
            {
                "Id": "8280ef9e-2ad3-43b0-946c-c2b5ad1bc3b9",
                "Name": "Daycare",
                "Address": "124 Woodpecker Run",
                "AddressTwo": "",
                "CityName": "New Braunfels",
                "CountyName": "",
                "Country": {
                    "Code": "US",
                    "Label": "UNITED STATES"
                },
                "DevicesCount": 5,
                "UsersCount": 2,
                "PostalCode": "78130",
                "State": {
                    "Code": "TX",
                    "Label": "Texas"
                },
                "LastTestModeAlert": "03/31/2014 21:04:28 +00:00",
                "MapCoordinates": {
                    "Latitude": "29.660032424926758",
                    "Longitude": "-98.55403189897537"
                },
                "Phone": "(238) 963-3214",
                "PhoneExtension": "",
                "Dispatchers": [],
                "FloorMapLink": null,
                "FloorMap": null,
                "TestMode": false,
                "HasADeviceThatCanReceiveReverseAlerts": false,
                "Contacts": null,
                "CreatedBy": "00000000-0000-0000-0000-000000000000",
                "CreatedByUser": null,
                "CreatedOnServer": "1/1/0001 12:00:00 AM +00:00",
                "LastModifiedBy": null,
                "LastModifiedByUser": null,
                "LastModifiedOnServer": "1/1/0001 12:00:00 AM +00:00",
                "SendAlertsToAllOrganization": false
            },
            {
                "Id": "24c5a635-e24e-47e6-8022-5a4538cab9ab",
                "Name": "Gym",
                "Address": "798 Mockingjay Lane",
                "AddressTwo": "Suite 400",
                "CityName": "New Braunfels",
                "CountyName": "",
                "Country": {
                    "Code": "US",
                    "Label": "UNITED STATES"
                },
                "DevicesCount": 15,
                "UsersCount": 12,
                "PostalCode": "78130",
                "State": {
                    "Code": "TX",
                    "Label": "Texas"
                },
                "LastTestModeAlert": "06/23/2014 16:38:00 +00:00",
                "MapCoordinates": {
                    "Latitude": "29.488869705200195",
                    "Longitude": "-98.37094116210938"
                },
                "Phone": "(555) 555-4444",
                "PhoneExtension": "",
                "Dispatchers": [],
                "FloorMapLink": null,
                "FloorMap": null,
                "TestMode": true,
                "HasADeviceThatCanReceiveReverseAlerts": true,
                "Contacts": null,
                "CreatedBy": "00000000-0000-0000-0000-000000000000",
                "CreatedByUser": null,
                "CreatedOnServer": "1/1/0001 12:00:00 AM +00:00",
                "LastModifiedBy": null,
                "LastModifiedByUser": null,
                "LastModifiedOnServer": "1/1/0001 12:00:00 AM +00:00",
                "SendAlertsToAllOrganization": false
            },
            {
                "Id": "4d756f5e-32bd-476c-8c3d-fcd269c37341",
                "Name": "Science Building",
                "Address": "659 Blue Jay Lane",
                "AddressTwo": "",
                "CityName": "New Braunfels",
                "CountyName": "",
                "Country": {
                    "Code": "US",
                    "Label": "UNITED STATES"
                },
                "DevicesCount": 2,
                "UsersCount": 8,
                "PostalCode": "78130",
                "State": {
                    "Code": "TX",
                    "Label": "Texas"
                },
                "LastTestModeAlert": "05/21/2014 14:29:50 +00:00",
                "MapCoordinates": {
                    "Latitude": "29.571949310302734",
                    "Longitude": "-98.6083822631836"
                },
                "Phone": "1452378698",
                "PhoneExtension": "",
                "Dispatchers": [],
                "FloorMapLink": null,
                "FloorMap": null,
                "TestMode": false,
                "HasADeviceThatCanReceiveReverseAlerts": false,
                "Contacts": null,
                "CreatedBy": "00000000-0000-0000-0000-000000000000",
                "CreatedByUser": null,
                "CreatedOnServer": "1/1/0001 12:00:00 AM +00:00",
                "LastModifiedBy": null,
                "LastModifiedByUser": null,
                "LastModifiedOnServer": "1/1/0001 12:00:00 AM +00:00",
                "SendAlertsToAllOrganization": false
            },
            {
                "Id": "6b678aff-b246-4106-89fa-d445eada1692",
                "Name": "Administration Building",
                "Address": "299 Woodpecker Run",
                "AddressTwo": "",
                "CityName": "New Braunfels",
                "CountyName": "",
                "Country": {
                    "Code": "US",
                    "Label": "UNITED STATES"
                },
                "DevicesCount": 7,
                "UsersCount": 11,
                "PostalCode": "78130",
                "State": {
                    "Code": "TX",
                    "Label": "Texas"
                },
                "LastTestModeAlert": "06/26/2014 19:29:24 +00:00",
                "MapCoordinates": {
                    "Latitude": "29.499585166573524",
                    "Longitude": "-98.66346796452999"
                },
                "Phone": "5555554141",
                "PhoneExtension": "",
                "Dispatchers": [],
                "FloorMapLink": null,
                "FloorMap": null,
                "TestMode": true,
                "HasADeviceThatCanReceiveReverseAlerts": false,
                "Contacts": null,
                "CreatedBy": "00000000-0000-0000-0000-000000000000",
                "CreatedByUser": null,
                "CreatedOnServer": "1/1/0001 12:00:00 AM +00:00",
                "LastModifiedBy": null,
                "LastModifiedByUser": null,
                "LastModifiedOnServer": "1/1/0001 12:00:00 AM +00:00",
                "SendAlertsToAllOrganization": true
            }
        ],
        "TotalLocations": 45,
        "TotalPages": 3
    };

    var OrganizationLocation = (function () {
        function OrganizationLocation(rawItem) {
            this.Name = ko.observable(rawItem.Name || "");
            this.UsersCount = ko.observable(rawItem.UsersCount || 0);
            this.DevicesCount = ko.observable(rawItem.DevicesCount || 0);
            this.Address = ko.observable(rawItem.Address || "");
            this.CityName = ko.observable(rawItem.CityName || "");
            this.StateName = ko.observable(rawItem.State && rawItem.State.Label || "");
            this.HasADeviceThatCanReceiveReverseAlerts = ko.observable(rawItem.HasADeviceThatCanReceiveReverseAlerts || false);
            this.LastTestModeAlert = ko.observable(rawItem.LastTestModeAlert || "never");
        }
        return OrganizationLocation;
    })();
    tablesPoc.OrganizationLocation = OrganizationLocation;

    var ViewModel = (function () {
        function ViewModel() {
            var _this = this;
            this.cfgList = [
                {
                    key: "pageMaxWidth",
                    label: "Page max width",
                    value: ko.observable(""),
                    type: "text"
                },
                {
                    key: "pageMinWidth",
                    label: "Page min width",
                    value: ko.observable(""),
                    type: "text"
                },
                {
                    key: "tableContainerMaxWidth",
                    label: "Table container max width",
                    value: ko.observable(""),
                    type: "text"
                },
                {
                    key: "tableContainerMinWidth",
                    label: "Table container min width",
                    value: ko.observable(""),
                    type: "text"
                },
                {
                    key: "tableWidth",
                    label: "Table width",
                    value: ko.observable(""),
                    type: "text"
                },
                {
                    key: "tableMaxWidth",
                    label: "Table container max width",
                    value: ko.observable("1200px"),
                    type: "text"
                },
                {
                    key: "tableMinWidth",
                    label: "Table container min width",
                    value: ko.observable("600px"),
                    type: "text"
                },
                {
                    key: "maxColumnWidth",
                    label: "General max column width",
                    value: ko.observable("300px"),
                    type: "text"
                },
                {
                    key: "minColumnWidth",
                    label: "General min column width",
                    value: ko.observable("20px"),
                    type: "text"
                },
                {
                    key: "maxHeaderWidth",
                    label: "Max header width (it is the minimum column with for long headers)",
                    value: ko.observable("1.75em"),
                    type: "text"
                },
                {
                    key: "ellipsisForLongWords",
                    label: "Ellipsis for long words: ",
                    value: ko.observable(true),
                    type: "checkbox"
                },
                {
                    key: "editable",
                    label: "Edit values",
                    value: ko.observable(false),
                    type: "checkbox"
                },
                {
                    key: "showNavigationBars",
                    label: "Show Navigation Bars",
                    value: ko.observable(true),
                    type: "checkbox"
                },
                {
                    key: "collapsedNavigation",
                    label: "Collapsed Navigation",
                    value: ko.observable(false),
                    type: "checkbox"
                },
                {
                    key: "showProfileNav",
                    label: "Show Profile Nav",
                    value: ko.observable(false),
                    type: "checkbox"
                }
            ];
            this.cfg = _.object(_.map(this.cfgList, function (v) {
                return [v["key"], v["value"]];
            }));
            this.colCfgList = [
                {
                    key: "Name",
                    label: ko.observable("Name"),
                    width: ko.observable(""),
                    maxWidth: ko.observable("500px"),
                    minWidth: ko.observable("200px")
                },
                {
                    key: "UsersCount",
                    label: ko.observable("Users"),
                    width: ko.observable(""),
                    maxWidth: ko.observable("40px"),
                    minWidth: ko.observable("40px")
                },
                {
                    key: "DevicesCount",
                    label: ko.observable("Devices"),
                    width: ko.observable(""),
                    maxWidth: ko.observable("40px"),
                    minWidth: ko.observable("40px")
                },
                {
                    key: "Address",
                    label: ko.observable("Address"),
                    width: ko.observable(""),
                    maxWidth: ko.observable("300px"),
                    minWidth: ko.observable("100px")
                },
                {
                    key: "CityName",
                    label: ko.observable("City"),
                    width: ko.observable(""),
                    maxWidth: ko.observable("300px"),
                    minWidth: ko.observable("100px")
                },
                {
                    key: "StateName",
                    label: ko.observable("State"),
                    width: ko.observable(""),
                    maxWidth: ko.observable("300px"),
                    minWidth: ko.observable("100px")
                },
                {
                    key: "HasADeviceThatCanReceiveReverseAlerts",
                    label: ko.observable("911"),
                    width: ko.observable(""),
                    maxWidth: ko.observable("40px"),
                    minWidth: ko.observable("40px")
                },
                {
                    key: "LastTestModeAlert",
                    label: ko.observable("Last test alert"),
                    width: ko.observable(""),
                    maxWidth: ko.observable("200px"),
                    minWidth: ko.observable("200px")
                }
            ];
            this.exampleData = {
                _L: "MediumLongTextWithSome Spaces SoItCanBeSeparatedn InMoreThanOneLine - MediumLongTextWithSome Spaces SoItCanBeSeparatedn InMoreThanOneLine",
                _XL: "ReallyLongTextWithoutSpacesItCannotBeSeparatedInMoreThanOneLineButIWillAddAnother SeparatedWord To Test Something",
                _backup: {},
                _setBackup: function (columnKey) {
                    if (_this.exampleData._backup[columnKey] == null) {
                        _this.exampleData._backup[columnKey] = _this.locations()[0][columnKey]();
                    }
                },
                reset: function (column) {
                    _this.exampleData._setBackup(column.key);
                    _this.locations()[0][column.key](_this.exampleData._backup[column.key]);
                },
                setL: function (column) {
                    _this.exampleData._setBackup(column.key);
                    _this.locations()[0][column.key](_this.exampleData._L);
                },
                setXL: function (column) {
                    _this.exampleData._setBackup(column.key);
                    _this.locations()[0][column.key](_this.exampleData._XL);
                }
            };
            this.locations = ko.observableArray(_.map(rawData.Locations, function (item) {
                return new OrganizationLocation(item);
            }));
        }
        return ViewModel;
    })();
    tablesPoc.ViewModel = ViewModel;
})(tablesPoc || (tablesPoc = {}));

$(function () {
    var vm = new tablesPoc.ViewModel();
    window["vm"] = vm;
    ko.applyBindings(vm);
});
//# sourceMappingURL=app.js.map
