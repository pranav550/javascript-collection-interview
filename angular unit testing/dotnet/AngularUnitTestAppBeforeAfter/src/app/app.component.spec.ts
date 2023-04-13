import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent',()=>{
  let comp: any;
  beforeAll(()=>{
    console.log("before all")
  })
  afterAll(()=>{
    console.log("after all")
  })
  beforeEach(()=>{
    comp=new AppComponent();
    console.log("before each")
  })
  afterEach(()=>{
    console.log("after each")
    comp=null;
  })
  it("increase count",()=>{
    comp.increaseCount(2);
    expect(comp.count).toEqual(12)
    console.log("increase count")
  })
  it("decrase count",()=>{
    comp.decreaseCount(2);
    expect(comp.count).toEqual(8)
    console.log("decrease count")
  })
 
})
