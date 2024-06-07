import {Page, expect} from '@playwright/test';
import _ from 'lodash'
export class DatePicker {

    readonly page:Page
  randomYearNumber2: number;
 
    constructor(page:Page){

     this.page = page;

}
 
  get header(){
    return "h1"
    
  }
  get fromInput() {
    return "#from";
  }
  get toInput() {
    return "#to";
  }
  get monthOfTheYear() {
    return '[class="ui-datepicker-month"]';
  }
  get prevYear() {
    return '[title="Prev"]';
  }
  get nextYear() {
    return '[title="Next"]';
  }
  get getDate() {
    return ".ui-state-default";
  }
  get dateFromComponent() {
    return "#ui-datepicker-div";
  }
  get dateOfTheYear() {
    return '[class="ui-datepicker-year"]';
  }
  get dateOfTheMonth() {
    return '[class="ui-datepicker-month"]';
  }

 public async verifyHeader(){
   const header = this.page.locator(this.header)
   await expect(header).toContainText('Date Picker')

  }
  randomYearNumber = _.random(1,50)
   date = _.random(1,30)
   public async dateFromToday() {
    this.page.locator(this.fromInput).click()
    console.log(this.randomYearNumber);
    for(let i = 0; i < this.randomYearNumber; i++){
      await this.page.locator(this.prevYear).click()
    }
     let year = await this.page.locator(this.dateOfTheYear).textContent()
     let month = await this.page.locator(this.dateOfTheMonth)
     .locator('[selected="selected"]')
     .textContent()
     console.log(year);
     console.log(month)
     await this.page.locator(this.dateFromComponent).getByRole('link',{name: this.date}).click()
     await expect(this.page.locator(this.fromInput).inputValue()).toBe(`${Object[month]}/${this.date}/${year}`)

  }
}
 