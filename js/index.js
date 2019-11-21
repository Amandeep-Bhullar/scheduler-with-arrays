
// LAB: ARRAYS, PART 1
// 1. Create a 2nd course Object
// 2. Store both course Objects in an array whose reference is stored as: allCourses
//      allCourses is an [] (reference) that hold two identically structured Objects
// 3. Modify the lines above (32-37) to put the values from the first course into the document
// 4. Wrap the output code (lines 32-37) in a function called setCourseHtml()
//      It should take a single Object as a parameter and update the document to match the argument passed
//      For example:
//          setCourseHtml( allCourses[0] );   // Will set data from the first course to the document
//          setCourseHtml( allCourses[1] );   // Will set data from the second course to the document
//
// 5. (LATER) Write a function called getCourseAsHtmlString()
//      It should take a single course object as a parameter and return an HTML template string with the course data in it
//      Ie, Move the HTML for a course (<article>) from index.html to the function in Javascript
//      Fill it with the parameter Object's data, then return it
//      At the point it was called, get the return string and append it to <main> (which should be set with id="courses")


/******* GLOABL VARIABLES/DATA ********/
// Define all of your variables here, including Object and Array references
//allCourses is an [] (reference)
const allCourses=[
    {
      name: `Tools and Workflow`,
      code: `WDDM-115`,
      instructor: `Kadeem Best`,
      start: { term: `Fall`, year: 2019 },
      weeks: 15,
      breaks: true,
      dura: 160,
    },
    {
      name: `Prototyping`,//1.Create a 2nd course Object
      code: `WDDM-117`,
      instructor: `Cory Coletta`,
      start: { term: `Fall`, year: 2019 },
      weeks: 15,
      breaks: true,
      dura: 160, 
    },
    {
      name: `Applied Design`,
      code: `WDDM-114`,
      instructor: `Rocco`,
      start: { term: `Fall`, year: 2019 },
      weeks: 15,
      breaks: true,
      dura: 160,
    },
    {
      name: `Production Techniques`,//1.Create a 2nd course Object
      code: `WDDM-116`,
      instructor: `Milord`,
      start: { term: `Fall`, year: 2019 },
      weeks: 15,
      breaks: true,
      dura: 160, 
    }
]


/************* FUNCTIONS *************/
// Now store all the functions that will manipulate the data
//4
//  function setCourseHtml(allCourses){
//   return allCourses;
// }

//5
function getCourseAsHtmlString(singleCourse){
    
    let htmlString=
    `<article class='course'>
        <h3>
        ${singleCourse.name}
        </h3>
        <ul>
          <li>Course Code: 
          <strong>
          ${singleCourse.code}
          </strong>
          </li>
          <li>Instructor: <strong >
          ${singleCourse.instructor}
          </strong></li>
          <li>Start: <strong>
          Hi! ${singleCourse.start.term}, ${singleCourse.start.year}
          </strong></li>
          <li>
            Weeks: <strong>
            ${singleCourse.weeks}
            </strong>
            <ul>
                <li>
                  Includes Break: <strong>${singleCourse.breaks}</strong>
                </li>
            </ul>
          </li>
          <li>Duration: <strong > ${getDurationFromMinutes(singleCourse.dura)}</strong></li>
        </ul>
      </article>`;
      return htmlString;
}
// LAB:
// 1. Add a button the document that when clicked, 
// will load ONLY the first three courses
// Test by having at least 4 courses


// 2. Wrap the below functionality in a function
// that takes the Array to print as a parameter
// Test by passing "allCourses".
function showThreeCoursesFunction(){

  document.getElementById('courses').innerHTML= allCourses.slice(0,3).map(getCourseAsHtmlString).join('\n');

}

/* 
LAB:
1. Fix the output of the start term by turning the Object's properties into a String
      Ex: { term: `Fall`, year: 2019 }  >>  `Fall 2019`

*/
const start = { 
    term: `Fall`, 
    year: 2019 
};
//document.getElementById(`start`).innerHTML = `Hi! ${start.term}, ${start.year}`;
/*
2. Write a function that will take a Number of minutes and will return a human-readable String
      Ex: 160  >>  `2 hr, 40 min`
      Hints:
        - Division: /
        - Remainder: %
        - Rounding:

            - Standard rules:     Math.round(4.5)
            - Standard rules up:     Math.round(4.6-4.9)
            - Always round up:    Math.ceil(1.001)
            - Always round down:  Math.floor(1.999)
*/
    function getDurationFromMinutes(dura) {
        var num = dura;
       var hours = (num / 60);
       var rhours = Math.floor(hours);
       var minutes = (hours - rhours) * 60;
       var rminutes = Math.round(minutes);
     return dura + " minutes = " + rhours + " hour(s) and " + rminutes + " minute(s).";
      //return dura;
}
getDurationFromMinutes(160);  // 2 hr, 40 min
console.log(getDurationFromMinutes(160));

/************* EXECUTABLE *************/
// Execute functions that will access data
//document.getElementById(`courses`).innerHTML=getCourseAsHtmlString(allCourses[0]);

// The map() function loops through EACH value in an array, 
// works with it, returns a new Array (1 for 1)
//const arrCourseAsHtml=allCourses.map(getCourseAsHtmlString);// map() returns Array

// The join() function takes each value in an Array combining
// it together to create a String, separating by a newline (\n)
//const stringCourseAsHtml=arrCourseAsHtml.join('\n');// join() returns String

// Take our new string, put into the document
 //document.getElementById('courses').innerHTML= stringCourseAsHtml;
 
 // The map() function,The join() function use together in one line to the new string into the document
 
 
 
 
 // LAB:
// 1. Add a button the document that when clicked, 
// will load ONLY the first three courses
// Test by having at least 4 courses
courseAvailableButton= document.getElementById("button");

// 3. Wrap the entire execution in an Event handler
// so that the code only runs when the window
// has finished loading

courseAvailableButton.addEventListener("click",showThreeCoursesFunction);


 