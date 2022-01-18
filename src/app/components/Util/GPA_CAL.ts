export default class GPA_CAL{

  static calculateGPA(grade) {

    switch (grade) {
      case "A":
        return 4.00;
      case "A-":
        return 3.7;
      case"B+":
        return 3.3;
      case"B":
        return 3.0;
      case"B-":
        return 2.7;
      case"C+":
        return 2.3;
      case"C":
        return 2.0;
    }

    return 0;
  }
}
