import {gpa_detail} from "../gpa-table/gpa-table.component";

export default class GPA_CAL {

  static calculateGPA(grade: string, credits: number) {

    switch (grade) {
      case "A":
        return (4.00 * credits);
      case "A-":
        return (3.7 * credits);
      case"B+":
        return (3.3 * credits);
      case"B":
        return (3.0 * credits);
      case"B-":
        return (2.7 * credits);
      case"C+":
        return (2.3 * credits);
      case"C":
        return (2.0 * credits);
    }

    return 0;
  }

  static calculateFinalGPA(detailArray: gpa_detail[]) {
    let totalCredits=0;
    let totalGPA=0;
    let finalGPA;
    for (let i = 0; i < detailArray.length; i++) {
        totalCredits+=detailArray[i].credits;
        totalGPA+=detailArray[i].gpa;
    }
    finalGPA=parseFloat((totalGPA/totalCredits).toString()).toFixed(2);
    return finalGPA;
  }
}
