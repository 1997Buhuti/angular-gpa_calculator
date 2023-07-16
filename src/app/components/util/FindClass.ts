import { lblData } from './lblData';
export default class FindClass {
  public static findClass(GPA: number) {
    let lblData: lblData = { message: '', gifImage: '' };
    console.log('GPA=' + GPA);
    if (GPA >= 3.7) {
      lblData.message = "Congratulations mate You've got a 1st class...!";
      lblData.gifImage = '1stClass';
      console.log('Hi 1st class');
    } else if (3.3 <= GPA && GPA < 3.7) {
      lblData.message = "Congratulations mate You've got a 2nd Upper...!";
      lblData.gifImage = '2ndUpper';
      console.log('Hi 2nd class');
    } else if (3.0 <= GPA && GPA < 3.3) {
      lblData.message = "Congratulations mate You've got a 2nd Lower...!";
      lblData.gifImage = '2ndLower';
    } else if (2.0 <= GPA && GPA < 3.0) {
      lblData.message = "Congratulations mate  You've finally Passed...!";
      lblData.gifImage = 'passed';
      console.log('Hi');
    } else {
      lblData.message = 'Error GPA less than 2.00...!';
      lblData.gifImage = '';
    }
    console.log('message' + lblData.message + 'gif' + lblData.gifImage);

    return lblData;
  }
}
