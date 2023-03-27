import { take, put, spawn, call } from "redux-saga/effects";
import skillsRequest from "../../utils/utils";
import { makingOrder } from "../../utils/utils";
import {
  getCategory,
  getSalesHitsItems,
  getProduct,
  submittingForm,
} from "../actions/actionToolkit";
import {
  putCategory,
  putItemsOffset,
  putProduct,
  getItems,
  putItems,
  getItemsOffset,
  showErrorCatalog,
  showErrorProduct,
  showErrorOffset,
} from "../slices/catalog";
import { putSalesHitsItems, showErrorSalesHits } from "../slices/salesHits";
import { submitForm, showErrorSubmitting } from "../slices/basket";

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
    const data = yield call(skillsRequest, action.payload);
    yield put(putCategory(data));
  } catch (e) {
    //yield put(showError(e.message));
  }
}

// запрос элементов каталога категории "все"

//watcher
function* searhSkillsSagaItems() {
  while (true) {
    const action = yield take(getItems);
    yield call(handleSearchSkillsSagaItems, action);
  }
}

//worker

function* handleSearchSkillsSagaItems(action) {
  try {
    const data = yield call(skillsRequest, action.payload.url);
    yield put(putItems(data));
  } catch (e) {
    yield put(showErrorCatalog(e.message));
  }
}

// запрос элементов SalesHits

//watcher
function* searhSkillsSagaSalesHitsItems() {
  while (true) {
    const action = yield take(getSalesHitsItems);
    yield call(handleSearchSkillsSagaSalesHitsItems, action);
  }
}

//worker

function* handleSearchSkillsSagaSalesHitsItems(action) {
  try {
  const data = yield call(skillsRequest, action.payload);
  yield put(putSalesHitsItems(data));
} catch (e) {
  yield put(showErrorSalesHits(e.message));
}

}

// запрос элементов Catalog при нажатии кноки Загрузить ещё

//watcher
function* searhSkillsSagaOffsetItems() {
  while (true) {
    const action = yield take(getItemsOffset);
    yield call(handleSearchSkillsSagaOffsetItems, action);
  }
}

//worker

function* handleSearchSkillsSagaOffsetItems(action) {
  try {
  const data = yield call(skillsRequest, action.payload.url);
  yield put(putItemsOffset(data));}
  catch(e) {
    yield put(showErrorOffset(e.message))
  }
}

// запрос Product

//watcher
function* searhSkillsSagaProduct() {
  while (true) {
    const action = yield take(getProduct);
    yield call(handleSearchSkillsSagaProduct, action);
  }
}

//worker

function* handleSearchSkillsSagaProduct(action) {
  try {
  const data = yield call(skillsRequest, action.payload);
  yield put(putProduct(data));
  } catch (e) {
    yield put(showErrorProduct(e.message));
  }
}

//отправка формы - заказ товара

//watcher
function* submittingFormSaga() {
  while (true) {
    const action = yield take(submittingForm);
    yield call(handleSubmittingFormSaga, action);
  }
}

//worker

function* handleSubmittingFormSaga(action) {
  try {
    const data = yield call(
      makingOrder,
      action.payload.url,
      action.payload.data
    );
    yield put(submitForm(data));
  } catch (e) {
    yield put(showErrorSubmitting(e.message));
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
