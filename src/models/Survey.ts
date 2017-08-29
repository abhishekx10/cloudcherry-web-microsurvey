import Question from './Question';

class Survey {
  logoURL : String;
  backgroundURL : String;
  businessName : String;
  businessCountry : String;
  businessTagline : String;
  colorCode1 : String;
  colorCode2 : String;
  colorCode3 : String;
  welcomeText : String;
  welcomeAudio : String;
  welcomeImage : String;
  thankyouText : String;
  thankyouAudio : String;
  thankyouImage : String;
  disclaimerText : String;
  textStyles : String;
  questions : Question[];
  preFill : Boolean;
  ack : String;
  translated : Boolean;
  reCaptchaSiteKey : String;
  classicCaptcha : Boolean;
  skipWelcome : Boolean;
  partialResponseId : String;
  doNotSocialShare : String;
  attributes : String;
  preferredStation : String;
}

export default Survey;

/*
{
  "logoURL": null,
  "backgroundURL": null,
  "businessName": "CloudCherry",
  "businessCountry": null,
  "businessTagline": null,
  "colorCode1": "#838383",
  "colorCode2": "#838383",
  "colorCode3": "#ffffff",
  "welcomeText": "Please share your feedback.",
  "welcomeAudio": null,
  "welcomeImage": null,
  "thankyouText": "Thank you for your response.",
  "thankyouAudio": null,
  "thankyouImage": null,
  "disclaimerText": null,
  "textStyles": null,
  "questions": [
    {
      "id": "598a25b2977ac32f48e064f3",
      "user": "wowlabz",
      "setName": null,
      "sequence": 1,
      "text": "Theme Classification",
      "audio": null,
      "displayType": "Text",
      "multiSelect": [],
      "displayLegend": null,
      "multiSelectChoiceTag": [],
      "leadingDisplayTexts": [],
      "staffFill": false,
      "apiFill": true,
      "displayLocation": [],
      "displayLocationByTag": [],
      "userWeight": 0,
      "displayStyle": null,
      "conditionalToQuestion": null,
      "conditionalAnswerCheck": null,
      "conditionalNumber": 0,
      "endOfSurvey": false,
      "endOfSurveyMessage": null,
      "conditionalFilter": null,
      "presentationMode": null,
      "analyticsTag": null,
      "isRequired": false,
      "questionTags": [
        "Theme"
      ],
      "topicTags": [],
      "goodAfter": null,
      "goodBefore": null,
      "timeOfDayAfter": null,
      "timeOfDayBefore": null,
      "isRetired": false,
      "note": null,
      "backgroundURL": null,
      "disclaimerText": null,
      "validationRegex": null,
      "validationHint": null,
      "translated": {},
      "timeLimit": 0,
      "interactiveLiveAPIPreFillUrl": null,
      "restrictedData": false,
      "attributes": null,
      "perLocationOverride": null
    },
    {
      "id": "598a25b2977ac32f48e064f4",
      "user": "wowlabz",
      "setName": null,
      "sequence": 3,
      "text": "Please share your experience with us in more detail.",
      "audio": null,
      "displayType": "MultilineText",
      "multiSelect": [],
      "displayLegend": null,
      "multiSelectChoiceTag": [],
      "leadingDisplayTexts": [],
      "staffFill": false,
      "apiFill": false,
      "displayLocation": [],
      "displayLocationByTag": [],
      "userWeight": 0,
      "displayStyle": null,
      "conditionalToQuestion": null,
      "conditionalAnswerCheck": null,
      "conditionalNumber": 0,
      "endOfSurvey": false,
      "endOfSurveyMessage": null,
      "conditionalFilter": null,
      "presentationMode": null,
      "analyticsTag": null,
      "isRequired": false,
      "questionTags": [
        "Comments"
      ],
      "topicTags": [],
      "goodAfter": null,
      "goodBefore": null,
      "timeOfDayAfter": null,
      "timeOfDayBefore": null,
      "isRetired": false,
      "note": null,
      "backgroundURL": null,
      "disclaimerText": null,
      "validationRegex": null,
      "validationHint": null,
      "translated": {},
      "timeLimit": 0,
      "interactiveLiveAPIPreFillUrl": null,
      "restrictedData": false,
      "attributes": null,
      "perLocationOverride": null
    },
    {
      "id": "598a25b2977ac32f48e064f8",
      "user": "wowlabz",
      "setName": null,
      "sequence": 4,
      "text": "Sentiment Analysis",
      "audio": null,
      "displayType": "MultiSelect",
      "multiSelect": [
        "Strong Negative",
        "Moderate Negative",
        "Neutral",
        "Moderate Positive",
        "Strong Positive"
      ],
      "displayLegend": null,
      "multiSelectChoiceTag": [],
      "leadingDisplayTexts": [],
      "staffFill": false,
      "apiFill": true,
      "displayLocation": [],
      "displayLocationByTag": [],
      "userWeight": 0,
      "displayStyle": null,
      "conditionalToQuestion": null,
      "conditionalAnswerCheck": null,
      "conditionalNumber": 0,
      "endOfSurvey": false,
      "endOfSurveyMessage": null,
      "conditionalFilter": null,
      "presentationMode": null,
      "analyticsTag": null,
      "isRequired": false,
      "questionTags": [
        "Sentiment",
        "azureml"
      ],
      "topicTags": [],
      "goodAfter": null,
      "goodBefore": null,
      "timeOfDayAfter": null,
      "timeOfDayBefore": null,
      "isRetired": false,
      "note": null,
      "backgroundURL": null,
      "disclaimerText": null,
      "validationRegex": null,
      "validationHint": null,
      "translated": {},
      "timeLimit": 0,
      "interactiveLiveAPIPreFillUrl": null,
      "restrictedData": false,
      "attributes": null,
      "perLocationOverride": null
    },
    {
      "id": "598a25b2977ac32f48e064f5",
      "user": "wowlabz",
      "setName": null,
      "sequence": 2,
      "text": "Based on this experience, how likely are you to recommend CloudCherry to your friends or family?",
      "audio": null,
      "displayType": "Scale",
      "multiSelect": [
        "0-10"
      ],
      "displayLegend": null,
      "multiSelectChoiceTag": [],
      "leadingDisplayTexts": [],
      "staffFill": false,
      "apiFill": false,
      "displayLocation": [],
      "displayLocationByTag": [],
      "userWeight": 0,
      "displayStyle": null,
      "conditionalToQuestion": null,
      "conditionalAnswerCheck": null,
      "conditionalNumber": 0,
      "endOfSurvey": false,
      "endOfSurveyMessage": null,
      "conditionalFilter": null,
      "presentationMode": null,
      "analyticsTag": null,
      "isRequired": true,
      "questionTags": [
        "NPS"
      ],
      "topicTags": [],
      "goodAfter": null,
      "goodBefore": null,
      "timeOfDayAfter": null,
      "timeOfDayBefore": null,
      "isRetired": false,
      "note": null,
      "backgroundURL": null,
      "disclaimerText": null,
      "validationRegex": null,
      "validationHint": null,
      "translated": {},
      "timeLimit": 0,
      "interactiveLiveAPIPreFillUrl": null,
      "restrictedData": false,
      "attributes": null,
      "perLocationOverride": null
    },
    {
      "id": "599491c63109691230826f6a",
      "user": "wowlabz",
      "setName": null,
      "sequence": 5,
      "text": "Enter 1?",
      "audio": null,
      "displayType": "Select",
      "multiSelect": [],
      "displayLegend": null,
      "multiSelectChoiceTag": [],
      "leadingDisplayTexts": [],
      "staffFill": false,
      "apiFill": false,
      "displayLocation": [],
      "displayLocationByTag": null,
      "userWeight": 1,
      "displayStyle": null,
      "conditionalToQuestion": null,
      "conditionalAnswerCheck": null,
      "conditionalNumber": 0,
      "endOfSurvey": false,
      "endOfSurveyMessage": null,
      "conditionalFilter": {
        "location": null,
        "afterdate": null,
        "beforedate": null,
        "filterquestions": [],
        "archived": false,
        "channel": null,
        "withTickets": false,
        "withTicketStatus": null,
        "withNotes": false,
        "notesWithAttachmentType": null,
        "notesMediaTheme": null,
        "notesMediaMood": null,
        "onlyWithAttachments": false,
        "days": null,
        "aftertime": null,
        "beforetime": null,
        "ticket": null,
        "filterName": null
      },
      "presentationMode": null,
      "analyticsTag": null,
      "isRequired": false,
      "questionTags": [],
      "topicTags": [],
      "goodAfter": null,
      "goodBefore": null,
      "timeOfDayAfter": null,
      "timeOfDayBefore": null,
      "isRetired": false,
      "note": null,
      "backgroundURL": null,
      "disclaimerText": null,
      "validationRegex": null,
      "validationHint": null,
      "translated": null,
      "timeLimit": 0,
      "interactiveLiveAPIPreFillUrl": null,
      "restrictedData": false,
      "attributes": null,
      "perLocationOverride": null
    },
    {
      "id": "599492203109691230826f77",
      "user": "wowlabz",
      "setName": null,
      "sequence": 6,
      "text": "test done?",
      "audio": null,
      "displayType": "Select",
      "multiSelect": [
        "Yes;yes.png",
        "No;no.png"
      ],
      "displayLegend": null,
      "multiSelectChoiceTag": [],
      "leadingDisplayTexts": [],
      "staffFill": false,
      "apiFill": false,
      "displayLocation": [],
      "displayLocationByTag": null,
      "userWeight": 1,
      "displayStyle": null,
      "conditionalToQuestion": null,
      "conditionalAnswerCheck": null,
      "conditionalNumber": 0,
      "endOfSurvey": false,
      "endOfSurveyMessage": null,
      "conditionalFilter": {
        "location": null,
        "afterdate": null,
        "beforedate": null,
        "filterquestions": [],
        "archived": false,
        "channel": null,
        "withTickets": false,
        "withTicketStatus": null,
        "withNotes": false,
        "notesWithAttachmentType": null,
        "notesMediaTheme": null,
        "notesMediaMood": null,
        "onlyWithAttachments": false,
        "days": null,
        "aftertime": null,
        "beforetime": null,
        "ticket": null,
        "filterName": null
      },
      "presentationMode": null,
      "analyticsTag": null,
      "isRequired": false,
      "questionTags": [],
      "topicTags": [],
      "goodAfter": null,
      "goodBefore": null,
      "timeOfDayAfter": null,
      "timeOfDayBefore": null,
      "isRetired": false,
      "note": null,
      "backgroundURL": null,
      "disclaimerText": null,
      "validationRegex": null,
      "validationHint": null,
      "translated": null,
      "timeLimit": 0,
      "interactiveLiveAPIPreFillUrl": null,
      "restrictedData": false,
      "attributes": null,
      "perLocationOverride": null
    },
    {
      "id": "599492783109691230826f85",
      "user": "wowlabz",
      "setName": "dwqd",
      "sequence": 7,
      "text": "ghfhgfhgfh:1",
      "audio": null,
      "displayType": "Smile-5",
      "multiSelect": [],
      "displayLegend": null,
      "multiSelectChoiceTag": [],
      "leadingDisplayTexts": [],
      "staffFill": false,
      "apiFill": false,
      "displayLocation": [],
      "displayLocationByTag": null,
      "userWeight": 1,
      "displayStyle": null,
      "conditionalToQuestion": null,
      "conditionalAnswerCheck": null,
      "conditionalNumber": 0,
      "endOfSurvey": false,
      "endOfSurveyMessage": null,
      "conditionalFilter": {
        "location": null,
        "afterdate": null,
        "beforedate": null,
        "filterquestions": [],
        "archived": false,
        "channel": null,
        "withTickets": false,
        "withTicketStatus": null,
        "withNotes": false,
        "notesWithAttachmentType": null,
        "notesMediaTheme": null,
        "notesMediaMood": null,
        "onlyWithAttachments": false,
        "days": null,
        "aftertime": null,
        "beforetime": null,
        "ticket": null,
        "filterName": null
      },
      "presentationMode": null,
      "analyticsTag": null,
      "isRequired": false,
      "questionTags": [],
      "topicTags": [],
      "goodAfter": null,
      "goodBefore": null,
      "timeOfDayAfter": null,
      "timeOfDayBefore": null,
      "isRetired": false,
      "note": null,
      "backgroundURL": null,
      "disclaimerText": null,
      "validationRegex": null,
      "validationHint": null,
      "translated": {},
      "timeLimit": 0,
      "interactiveLiveAPIPreFillUrl": null,
      "restrictedData": false,
      "attributes": null,
      "perLocationOverride": null
    },
    {
      "id": "599492783109691230826f88",
      "user": "wowlabz",
      "setName": "dwqd",
      "sequence": 8,
      "text": "ghfhgfhgfh:2",
      "audio": null,
      "displayType": "Smile-5",
      "multiSelect": [],
      "displayLegend": null,
      "multiSelectChoiceTag": [],
      "leadingDisplayTexts": [],
      "staffFill": false,
      "apiFill": false,
      "displayLocation": [],
      "displayLocationByTag": null,
      "userWeight": 1,
      "displayStyle": null,
      "conditionalToQuestion": null,
      "conditionalAnswerCheck": null,
      "conditionalNumber": 0,
      "endOfSurvey": false,
      "endOfSurveyMessage": null,
      "conditionalFilter": {
        "location": null,
        "afterdate": null,
        "beforedate": null,
        "filterquestions": [],
        "archived": false,
        "channel": null,
        "withTickets": false,
        "withTicketStatus": null,
        "withNotes": false,
        "notesWithAttachmentType": null,
        "notesMediaTheme": null,
        "notesMediaMood": null,
        "onlyWithAttachments": false,
        "days": null,
        "aftertime": null,
        "beforetime": null,
        "ticket": null,
        "filterName": null
      },
      "presentationMode": null,
      "analyticsTag": null,
      "isRequired": false,
      "questionTags": [],
      "topicTags": [],
      "goodAfter": null,
      "goodBefore": null,
      "timeOfDayAfter": null,
      "timeOfDayBefore": null,
      "isRetired": false,
      "note": null,
      "backgroundURL": null,
      "disclaimerText": null,
      "validationRegex": null,
      "validationHint": null,
      "translated": {},
      "timeLimit": 0,
      "interactiveLiveAPIPreFillUrl": null,
      "restrictedData": false,
      "attributes": null,
      "perLocationOverride": null
    },
    {
      "id": "599492783109691230826f8b",
      "user": "wowlabz",
      "setName": "dwqd",
      "sequence": 9,
      "text": "ghfhgfhgfh:3",
      "audio": null,
      "displayType": "Smile-5",
      "multiSelect": [],
      "displayLegend": null,
      "multiSelectChoiceTag": [],
      "leadingDisplayTexts": [],
      "staffFill": false,
      "apiFill": false,
      "displayLocation": [],
      "displayLocationByTag": null,
      "userWeight": 1,
      "displayStyle": null,
      "conditionalToQuestion": null,
      "conditionalAnswerCheck": null,
      "conditionalNumber": 0,
      "endOfSurvey": false,
      "endOfSurveyMessage": null,
      "conditionalFilter": {
        "location": null,
        "afterdate": null,
        "beforedate": null,
        "filterquestions": [],
        "archived": false,
        "channel": null,
        "withTickets": false,
        "withTicketStatus": null,
        "withNotes": false,
        "notesWithAttachmentType": null,
        "notesMediaTheme": null,
        "notesMediaMood": null,
        "onlyWithAttachments": false,
        "days": null,
        "aftertime": null,
        "beforetime": null,
        "ticket": null,
        "filterName": null
      },
      "presentationMode": null,
      "analyticsTag": null,
      "isRequired": false,
      "questionTags": [],
      "topicTags": [],
      "goodAfter": null,
      "goodBefore": null,
      "timeOfDayAfter": null,
      "timeOfDayBefore": null,
      "isRetired": false,
      "note": null,
      "backgroundURL": null,
      "disclaimerText": null,
      "validationRegex": null,
      "validationHint": null,
      "translated": {},
      "timeLimit": 0,
      "interactiveLiveAPIPreFillUrl": null,
      "restrictedData": false,
      "attributes": null,
      "perLocationOverride": null
    }
  ],
  "preFill": [],
  "ack": null,
  "translated": null,
  "reCaptchaSiteKey": null,
  "classicCaptcha": false,
  "skipWelcome": true,
  "partialResponseId": "28fe1358a44f49c99965fa07f6e31084-WW-02872",
  "doNotSocialShare": "Yes",
  "attributes": null,
  "preferredStation": "api"
}

*/