export default class IDGenerator{

  public static generateId():string{
    return (new Date().getTime()).toString(36);
  }
}
