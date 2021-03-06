// Copyright 2010-2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// Licensed under the Apache-2.0 License on an "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND.   

// ABOUT THIS NODE.JS SAMPLE: This sample is part of the SDK for JavaScript Developer Guide topic at
// https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide//sns-examples-sending-sms.html
// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set region
AWS.config.update({region: 'REGION'});

// Create promise and SNS service object
var phonenumPromise = new AWS.SNS({apiVersion: '2010-03-31'}).checkIfPhoneNumberIsOptedOut({phoneNumber: 'PHONE_NUMBER'}).promise();

// handle promise's fulfilled/rejected states
phonenumPromise.then(
  function(data) {
    console.log("Phone Opt Out is " + data.isOptedOut);
  }).catch(
    function(err) {
    console.error(err, err.stack);
  });
