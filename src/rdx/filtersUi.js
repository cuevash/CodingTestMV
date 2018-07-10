// REDUX
import { actions, rootEpic, rootReducer, flags, surveyData } from 'rdx'
import { applyMiddleware, combineReducers, compose, createStore } from 'redux'

import { createEpicMiddleware } from 'redux-observable';

import * as R from "ramda";
import _ from "lodash";

// DBs

let filtersUI = []

// INIT GRAPH FILTERS


// Types of filter
export const filterGraphExYearAll = {
  id: '',
  vals: [
    {
      id: '2016',
      label: '2016',
      val: 2016,
      active: false
    },
    {
      id: '2017',
      label: '2017',
      val: 2017,
      active: true
    },
  ]
}

export const filterGraphNonExYearAll = {
  id: '',
  nonExclusive: true,
  vals: [
    {
      id: '2016',
      label: '2016',
      val: 2016,
      active: false
    },
    {
      id: '2017',
      label: '2017',
      val: 2017,
      active: true
    },
  ]
}

export const filterGraphAllSelectedNonExYearAll = {
  id: '',
  nonExclusive: true,
  vals: [
    {
      id: '2016',
      label: '2016',
      val: 2016,
      active: true
    },
    {
      id: '2017',
      label: '2017',
      val: 2017,
      active: true
    },
  ]
}


export const filterGraphExYear2017 = {
  id: 'graph03-years',
  vals: [
    {
      id: '2017',
      label: '2017',
      val: 2017,
      active: true
    },
  ]
}

export const filterGraphVsNewUsed = {
  id: '',
  vals: [
    {
      id: 'NewVsUsed',
      label: 'Nuevos vs Usados',
      val: 'NewVsUsed',
      active: true
    },
    {
      id: 'NewPlusUsed',
      label: 'Nuevos + Usados',
      val: 'NewPlusUsed',
      active: false
    },
  ]
}

export const filterGraphExAllOrOnlyInternet = {
  id: '',
  vals: [
    {
      id: 'all',
      label: 'Todo',
      val: 'all',
      active: true
    },
    {
      id: 'only-internet',
      label: 'Sólo Internet',
      val: 'only-internet',
      active: false
    },
  ]
}



// FILTERS BY UI ID

// graph01
filtersUI.push( R.merge( R.clone(filterGraphExYearAll), { id: 'graph01-years'} ) )

// graph03
filtersUI.push( R.merge( R.clone(filterGraphExYear2017), { id: 'graph03-years'} ) )

// graph04
filtersUI.push( R.merge( R.clone(filterGraphExYear2017), { id: 'graph04-years'} ) )

// graph05
filtersUI.push( R.merge( R.clone(filterGraphExYearAll), { id: 'graph05-years'} ) )
filtersUI.push( R.merge( R.clone(filterGraphVsNewUsed), { id: 'graph05-vsnewused'} ) )

// graph06
filtersUI.push( R.merge( R.clone(filterGraphNonExYearAll), { id: 'graph06-years'} ) )

// graph07
filtersUI.push( R.merge( R.clone(filterGraphNonExYearAll), { id: 'graph07-2-years'} ) )

// graph08
filtersUI.push( R.merge( R.clone(filterGraphExYearAll), { id: 'graph08-years'} ) )


// graph09
filtersUI.push( R.merge( R.clone(filterGraphNonExYearAll), { id: 'graph09-years'} ) )

// graph11
filtersUI.push( R.merge( R.clone(filterGraphNonExYearAll), { id: 'graph11-years'} ) )
filtersUI.push( R.merge( R.clone(filterGraphExAllOrOnlyInternet), { id: 'graph11-internet'} ) )

// graph12
filtersUI.push( R.merge( R.clone(filterGraphNonExYearAll), { id: 'graph12-years'} ) )
filtersUI.push( R.merge( R.clone(filterGraphExAllOrOnlyInternet), { id: 'graph12-internet'} ) )


// graph17
filtersUI.push( R.merge( R.clone(filterGraphAllSelectedNonExYearAll), { id: 'graph17-years'} ) )

// graph19
filtersUI.push( R.merge( R.clone(filterGraphAllSelectedNonExYearAll), { id: 'graph19-years'} ) )

// graph20
filtersUI.push( R.merge( R.clone(filterGraphAllSelectedNonExYearAll), { id: 'graph20-years'} ) )

// graph22
filtersUI.push( R.merge( R.clone(filterGraphAllSelectedNonExYearAll), { id: 'graph22-years'} ) )

export const filtersUIConst =  R.clone( filtersUI )