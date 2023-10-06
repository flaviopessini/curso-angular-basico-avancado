import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingComponent } from './banking.component';

describe('BankingComponent', () => {
  let component: BankingComponent;
  let fixture: ComponentFixture<BankingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BankingComponent],
    });
    fixture = TestBed.createComponent(BankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`(U) getPoupanca(): poupanca tem 50`, () => {
    expect(component.getPoupanca).toEqual(50);
  });

  it(`(U) getCarteira(): cateira tem 10`, () => {
    expect(component.getCateira).toEqual(10);
  });

  it(`(U) setSacar(): transferir poupanca para carteira`, () => {
    component.setSacar(`10`);
    fixture.detectChanges();
    expect(component.getPoupanca).toEqual(40);
    expect(component.getCateira).toEqual(20);
  });

  it('(U) setSacar(): shoud transfer poupanca dont have string (isNaN) or poupanca < value', () => {
    expect(component.setSacar('string')).not.toBeTruthy();
    expect(component.setSacar('100')).toBeLessThanOrEqual(10); // tenta sacar valor maior do que o disponível, não vai debitar.
    expect(component.getPoupanca).toEqual(50);
    expect(component.getCateira).toEqual(10);
  });

  it(`(U) setDepositar(): transferir carteira para poupanca`, () => {
    component.setDepositar('10');
    fixture.detectChanges();
    expect(component.getCateira).toEqual(0);
    expect(component.getPoupanca).toEqual(60);
  });

  it('(U) setDepositar(): shoud transfer carteira dont have string (isNaN) or carteira < value', () => {
    expect(component.setDepositar('string')).not.toBeTruthy();
    expect(component.setDepositar('100')).toBeLessThanOrEqual(50); // tenta depositar valor maior do que o disponível, não vai debitar.
    expect(component.getPoupanca).toEqual(50);
    expect(component.getCateira).toEqual(10);
  });

  it(`(I) setDepositar(): transferir carteira para poupanca`, () => {
    let el = fixture.debugElement.nativeElement;
    el.querySelector('#input-depositar').value = '10';
    el.querySelector('#depositar').click();
    fixture.detectChanges();
    expect(component.getPoupanca).toEqual(60);
    expect(component.getCateira).toEqual(0);
  });
});
