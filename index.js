
}











var json = {
    {
 "pages": [
  {
   "name": "page1",
   "elements": [
    {
     "type": "radiogroup",
     "name": "crime",
     "title": "What type of incident was this?",
     "choices": [
      {
       "value": "misconduct",
       "text": "Sexual Misconduct"
      },
      {
       "value": "discrimination",
       "text": "Discrimination"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "confidential",
     "visibleIf": "{crime} = \"misconduct\"",
     "title": "Would you like to remain confidential?",
     "choices": [
      {
       "value": "yes",
       "text": "Yes"
      },
      {
       "value": "no",
       "text": "No"
      }
     ]
    },
    {
     "type": "matrix",
     "name": "confidentialResources",
     "visibleIf": "{confidential} = \"yes\"",
     "title": "Confidential Resources Available",
     "columns": [
      "Description",
      "Contact"
     ],
     "rows": [
      {
       "value": "cmhc",
       "text": "Campus Mental Health Center"
      },
      {
       "value": "uhs",
       "text": "University Health Services"
      },
      {
       "value": "utad",
       "text": "UT Advocates"
      },
      {
       "value": "ivps",
       "text": "Interpersonal Violence Peer Support"
      }
     ],
     "cells": {
      "cmhc": {
       "Description": "Talk to a licensed professional and get connected to mental health resources",
       "Contact": "NUMBER"
      },
      "uhs": {
       "Description": "Recieve confidential medical screenings",
       "Contact": "NUMBER"
      },
      "utad": {
       "Description": "Speak with a licensed professional about general concerns",
       "Contact": "NUMBER"
      },
      "ivps": {
       "Description": "Speak with a trained peer and get connected to resources",
       "Contact": "NUMBER"
      }
     }
    },
    {
     "type": "radiogroup",
     "name": "studentOffense",
     "visibleIf": "{confidential} = \"no\"",
     "title": "Was the offender a student?",
     "choices": [
      {
       "value": "yes",
       "text": "Yes"
      },
      {
       "value": "no",
       "text": "No"
      }
     ]
    },
    {
     "type": "matrix",
     "name": "dicriminationResources",
     "visibleIf": "{crime} = \"discrimination\"",
     "title": "Discrimination Resources",
     "columns": [
      "Description",
      "Contact"
     ],
     "rows": [
      {
       "value": "oie",
       "text": "Office of Inclusion and Equity"
      }
     ],
     "cells": {
      "oie": {
       "Description": "Report discrimination based on age, gender pregnancy, veteran status etc",
       "Contact": "NUMBER"
      }
     }
    },
    {
     "type": "matrix",
     "name": "studentOffenseResources",
     "visibleIf": "{studentOffense} = \"yes\"",
     "title": "Student Offense Resources",
     "columns": [
      "Description",
      "Contact"
     ],
     "rows": [
      {
       "value": "titleix",
       "text": "Title IX Office"
      }
     ],
     "cells": {
      "titleix": {
       "Description": "Report discrimination based on age, gender pregnancy, veteran status etc",
       "Contact": "NUMBER"
      }
     }
    }
   ]
  }
 ],
 "showQuestionNumbers": "off"
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            .textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3);
    });

ReactDOM.render(<Survey.Survey model={survey}/>, document.getElementById("surveyElement"));

