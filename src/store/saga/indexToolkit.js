import { take, put, spawn, call } from "redux-saga/effects";
import skillsRequest from "../../utils/utils";
import { makingOrder } from "../../utils/utils";
import { getCategory, getSalesHitsItems,  getProduct, submittingForm } from "../actions/actionToolkit";
import {putCategory, putItemsOffset, putProduct, getItems, putItems, getItemsOffset} from "../slices/catalog";
import {putSalesHitsItems} from "../slices/salesHits";
import { showError } from "../slices/error";
import { submitForm } from "../slices/basket";

// запрос категории

//watcher
function* searhSkillsSagaCategory() {
  console.log(1);
  while (true) {
    const action = yield take(getCategory);
    yield call(handleSearchSkillsSagaCategory, action);
  }
}

//worker

function* handleSearchSkillsSagaCategory(action) {

  try {
  const data = yield call(skillsRequest, action.payload)
  yield put(putCategory(data));
  } catch (e) {
    yield put(showError(e.message));
  }
}

// запрос элементов каталога категории "все"

//watcher
function* searhSkillsSagaItems() {
  console.log(1);
  while (true) {
    const action = yield take(getItems);
    console.log(action);
    yield call(handleSearchSkillsSagaItems, action);
  }
}

//worker

function* handleSearchSkillsSagaItems(action) {
  console.log(3, action.payload.url);
  const data = yield call(skillsRequest, action.payload.url);
  console.log(4, data);
  //yield put({ type: putItems, payload: data });
  try {yield put(putItems(data));}
  catch (error) {
    yield put();
  }
}

// запрос элементов SalesHits

//watcher
function* searhSkillsSagaSalesHitsItems() {
  console.log(1);
  while (true) {
    const action = yield take(getSalesHitsItems);
    console.log(action);
    yield call(handleSearchSkillsSagaSalesHitsItems, action);
  }
}

//worker

function* handleSearchSkillsSagaSalesHitsItems(action) {
  console.log(3, action.payload);
  const data = yield call(skillsRequest, action.payload);
  console.log(4, data);
  yield put(putSalesHitsItems(data));
}

// запрос элементов Catalog при нажатии кноки Загрузить ещё

//watcher
function* searhSkillsSagaOffsetItems() {
  console.log(1);
  while (true) {
    const action = yield take(getItemsOffset);
    console.log(action);
    yield call(handleSearchSkillsSagaOffsetItems, action);
  }
}

//worker

function* handleSearchSkillsSagaOffsetItems(action) {
  console.log(3, action.payload);
  const data = yield call(skillsRequest, action.payload.url);
  console.log(4, data);
  yield put(putItemsOffset(data));
}

// запрос Product

//watcher
function* searhSkillsSagaProduct() {
  console.log(1);
  while (true) {
    const action = yield take(getProduct);
    console.log(action);
    yield call(handleSearchSkillsSagaProduct, action);
  }
}

//worker

function* handleSearchSkillsSagaProduct(action) {
  console.log(3, action.payload);
  const data = yield call(skillsRequest, action.payload);
  console.log(4, data);
  yield put(putProduct(data));
}

//отправка формы - заказ товара

//watcher
function* submittingFormSaga() {
  console.log(1);
  while (true) {
    console.log(44)
    const action = yield take(submittingForm);
    console.log(10);
    yield call(handleSubmittingFormSaga, action);
  }
}

//worker

function* handleSubmittingFormSaga(action) {
  console.log(3, action.payload)
  try {
  const data = yield call(makingOrder, action.payload.url, action.payload.data);
  console.log(4, data);
  yield put(submitForm(data));

  } catch(e) {
    console.log('error', e.message)
    yield put(showError(e.message));
  }
}

export default function* saga() {
  yield spawn(searhSkillsSagaCategory);
  yield spawn(searhSkillsSagaItems);
  yield spawn(searhSkillsSagaSalesHitsItems);
  yield spawn(searhSkillsSagaOffsetItems);
  yield spawn(searhSkillsSagaProduct);
  yield spawn(submittingFormSaga);
}
