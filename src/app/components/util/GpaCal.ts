import { Gpa_Detail } from '../../IGpa_Detail';

export default class GpaCal {
  static calculateGPA(grade: string, credits: number) {
    switch (grade) {
      case 'A+':
        return parseFloat((4.0 * credits).toFixed(2));
      case 'A':
        return parseFloat((4.0 * credits).toFixed(2));
      case 'A-':
        return parseFloat((3.7 * credits).toFixed(2));
      case 'B+':
        return parseFloat((3.3 * credits).toFixed(2));
      case 'B':
        return parseFloat((3.0 * credits).toFixed(2));
      case 'B-':
        return parseFloat((2.7 * credits).toFixed(2));
      case 'C+':
        return parseFloat((2.3 * credits).toFixed(2));
      case 'C':
        return parseFloat((2.0 * credits).toFixed(2));
    }

    return 0;
  }

  static calculateFinalGPA(detailArray: Gpa_Detail[]) {
    let totalGPA = 0;
    let totalCredits: number = 0;
    for (let i = 0; i < detailArray.length; i++) {
      totalGPA += detailArray[i].gpa;
      totalCredits = totalCredits + detailArray[i].credits;
    }
    const value = parseFloat((totalGPA / totalCredits).toString()).toFixed(2);
    return value;
  }
}
