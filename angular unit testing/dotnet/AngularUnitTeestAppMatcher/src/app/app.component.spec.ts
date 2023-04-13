import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Addition } from './Calculator';

describe('AppComponent', () => {

let component = new AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'AngularUnitTeestApp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('AngularUnitTeestApp');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('AngularUnitTeestApp app is running!');
  });
  it('Show alert message',()=>{
    expect(component.showMessage('Hello')).toBe('Hello');
  })
  xit('show the addition result',()=>{
    expect(Addition(10,20)).toBe(200);
  })
  it('toBe and toEqual test case',()=>{
    // var a='Hello';
    // var b='Hello';
    // var a=1;
    // var b=1;
    var a=['1'];
    var b=['1'];
    expect(a).toEqual(b);
  })

  it('toBeTrue(),toBeFalse() testcase',()=>{
    //var a=true;
    //expect(a).toBe(true);
    // var a=true;
    // expect(a).toBeTrue();
    var a=false;
    expect(a).toBeFalse();
  })

  it('toBeTruthy(),toBeFalsy() testcase',()=>{
  //  expect(true).toBeTruthy(); //true
  //  expect('1').toBeTruthy(); // true
  //  expect(0).toBeTruthy(); // true
  //  expect(undefined).toBeTruthy(); // false
  //  expect(NaN).toBeTruthy(); // false
  //  expect(false).toBeTruthy(); // false
  //  expect('').toBeTruthy(); // false
  })

  it('toBeGreaterThan and toBeGreaterAndEqual',()=>{
    var a=5;
    expect(a).toBeGreaterThan(4)
    expect(a).toBeGreaterThanOrEqual(4)
    expect(a).toBeGreaterThanOrEqual(5)
  })

  it('toBeLessThan and toBeLessAndEqual',()=>{
    var a=5;
    expect(a).toBeLessThan(6)
    expect(a).toBeLessThanOrEqual(6)
    expect(a).toBeLessThanOrEqual(5)
  })

  it('Jasmin Matcher -Match function',()=>{
    var input = "The dotnetoffice tutorials";
    var strPhone = "001-789-56-67";
    expect(input).toMatch(/dotnetoffice/);
    expect(input).toMatch(/dotnetoffice/i);
    expect(input).not.toMatch(/dot1/);
    expect(strPhone).toMatch(/\d{3}-\d{3}-\d{2}-\d{2}/);
  })

  it('Jasmine Matcher -toBeCloseTo',()=>{
    var pi=3.1415926, e=2.78
    expect(pi).not.toBeCloseTo(e);
    expect(pi).toBeCloseTo(e,0);
    expect(4.334).toBeCloseTo(4.334);
    expect(4.334).toBeCloseTo(4.3345,1);
    expect(4.334).toBeCloseTo(4.3345,2);
    expect(4.334).not.toBeCloseTo(4.3,2);
    expect(4.223).not.toBeCloseTo(4.22,3);
    expect(4.223).not.toBeCloseTo(4.22,4);
  })

  it('Jasmine matcher to Be Defined',()=>{
    var MyObj={
      foo:"foo"
    }
    var Myfunction = (function() {})();
    var strUndefined;
    expect("The dotnet Office").toBeDefined;
    expect(MyObj).toBeDefined;
    expect(MyObj.foo).toBeDefined;
    expect(MyObj).not.toBeDefined;
    expect(strUndefined).not.toBeDefined;
  })

  it('Jasmine matcher to Be Undefined',()=>{
    var MyObj={
      foo:"foo"
    }
    var Myfunction = (function() {})();
    var strUndefined;
    
    expect(MyObj).not.toBeUndefined;
    expect(MyObj.foo).not.toBeUndefined;
    expect(Myfunction).toBeUndefined;
    expect(strUndefined).toBeDefined;
  })

  it('Jasmine matcher to Be Null',()=>{
   var nullValue=null;
   var valueUndefined;
   var notNull="notNull";
  expect(null).toBeNull();
  expect(nullValue).toBeNull();
  expect(valueUndefined).not.toBeNull();
  expect(notNull).not.toBeNull();
  })

  it('Jasmine matcher to Contain',function(){
  var MyArray=["jasmine","Dotnetoffice","Tutorials"];
   //expect([1, 2, 3]).toContain[2];
   expect([1, 2, 3]).toContain(2,3);
   expect(MyArray).toContain('jasmine');
   expect([1, 2, 3]).not.toContain(4);
   expect(MyArray).not.toContain("dot");
   })

   it('jasmine matcher tobeNan',()=>{
    expect(0/0).toBeNaN();
    expect(0/0).not.toBeNaN();
   })

   it('jasmine matcher tobePositiveInfinity',()=>{
    expect(1 / 0).toBePositiveInfinity();
  })

  it('jasmine matcher tobeNegativeInfinity',()=>{
    expect(-1 / 0).toBeNegativeInfinity();
  })

});
