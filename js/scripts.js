

/*  Key/Legend
Var
    inp1 = input1
    inp2 = input2
    inp3 = input3
    Triangle_Inputs = Form Name

    */

/* Notes

    In computing, a parser is one of the components in an interpreter or
    compiler that checks for correct syntax and builds a data structure
    (often some kind of parse tree, abstract syntax tree or other hierarchical structure)
    implicit in the input tokens.


    Technique
    if (side1 is equal to side2 AND side 2 is equal to side3) {equalitateral}

    if (side1 is equal to side2 AND side 2 doesn't equal to side3) {isosceles}

    if (side1 doesn't equal to side2 AND side2 doesn't equal to side 3 AND side 3 doesn't equal side 1) {scalene}

    http://www.w3schools.com/js/js_comparisons.asp

    */


function checkinputs(sideA, sideB, sideC)
{
/* Var = parseInt(document.Name_Of_Element_Form.Field_Name(Input).value); */
/* Input Fields */
sideA = parseInt(document.getegetElementById("input1").value);
sideB = parseInt(document.getegetElementById("input2").value);
sideC = parseInt(document.getegetElementById("input3").value);
/* Side options */
  if ((sideA + sideB > sideC && sideA + sideC > sideB && sideB + sideC > sideA) && (sideA == sideB && sideB == sideC)){
    alert("Equalateral");
  } else if ((sideA + sideB > sideC && sideA + sideC > sideB && sideB + sideC > sideA) && (sideA == sideB && sideB !== sideC)) {
    alert("Isosceles");
  } else if ((sideA + sideB > sideC && sideA + sideC > sideB && sideB + sideC > sideA) && (sideA != sideB && sideB !== sideC)) {
    alert("Scalene");
  } else {
  alert("These sides cannot form a triangle")
  }
}
