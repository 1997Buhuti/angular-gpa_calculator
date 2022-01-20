import {Gpa_Detail} from "../../IGpa_Detail";

export default class GpaCal {

  static calculateGPA(grade:string,credits:number) {

    switch (grade) {
      case "A":
        return (4.00*credits);
      case "A-":
        return (3.7*credits);
      case"B+":
        return (3.3*credits);
      case"B":
        return (3.0*credits);
      case"B-":
        return (2.7*credits);
      case"C+":
        return (2.3*credits);
      case"C":
        return (2.0*credits);
    }

    return 0;
  }

  static calculateFinalGPA(detailArray: Gpa_Detail[]) {
    let totalGPA=0;
    let totalCredits=0;
    for(let i=0;i<detailArray.length;i++) {
      totalGPA+=detailArray[i].gpa;
      totalCredits+=detailArray[i].credits
    }
    const value= parseFloat((totalGPA/totalCredits).toString()).toFixed(2);
    console.log(value);
    return value;
  }
}
