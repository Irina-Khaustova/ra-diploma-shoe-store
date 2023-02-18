import { take, put, spawn, call } from "redux-saga/effects";
import skillsRequest from "../../components/Utils/utils";
// import {
//   GET_CATEGORY,
//   GET_ITEMS,
//   SERCH_SKILLS_SUCCESS_CATEGORY,
//   SERCH_SKILLS_SUCCESS_ITEMS,
//   GET_SALES_HITS_ITEMS,
//   PUT_SALES_HITS_ITEMS,
//   PUT_ITEMS_OFFSET,
//   GET_ITEMS_OFFSET,
//   GET_PRODUCT,
//   PUT_PRODUCT,
// } from "../actions/actionTypes";
import { getCategory, getSalesHitsItems, getItemsOffset, getProduct } from "../actions/actionToolkit";
import {putCategory, putItemsOffset, putProduct, getItems, putItems} from "../slices/catalog";
import {putSalesHitsItems} from "../slices/salesHits";

// запрос категории

//watcher
function* searhSkillsSagaCategory() {
  console.log(1);
  while (true) {
    const action = yield take(getCategory);
    console.log(action);
    yield call(handleSearchSkillsSagaCategory, action);
  }
}

//worker

function* handleSearchSkillsSagaCategory(action) {
  console.log(3, action.payload);
  const data = yield call(skillsRequest, action.payload);
  console.log(4, data);
  yield put(putCategory(data));
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
  yield put(putItems(data));
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
export default function* saga() {
  yield spawn(searhSkillsSagaCategory);
  yield spawn(searhSkillsSagaItems);
  yield spawn(searhSkillsSagaSalesHitsItems);
  yield spawn(searhSkillsSagaOffsetItems);
  yield spawn(searhSkillsSagaProduct);
}
