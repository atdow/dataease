/*
 * @Author: atdow
 * @Date: 2022-04-27 15:27:03
 * @LastEditors: null
 * @LastEditTime: 2022-04-28 15:06:49
 * @Description: file description
 */

const getDefaultState = () => {
  return {
    panelName: '',
    panelInfo: {
      // id: null,
      // name: '',
      // preStyle: null,
      // proxy: null,
      'id': '40894b9b-c6c1-11ec-9f77-e17bb3700b30',
      'name': 'zdw1',
      'pid': '54ef3ee8-c5cf-11ec-ab02-6b7baca5d5c9',
      'level': 1,
      'nodeType': 'panel',
      'createBy': 'demo',
      'createTime': 1651025490457,
      'panelType': 'self',
      'source': null,
      'extend1': null,
      'extend2': null,
      'remark': null,
      'mobileLayout': true,
      'panelStyle': null,
      'panelData': null,
      'label': 'zdw1',
      'leaf': null,
      'privileges': 'export,grant,manage,view',
      'defaultPanelId': null,
      'defaultPanelName': null,
      'isDefault': false,
      'sourcePanelName': null,
      'children': null,
      'viewsInfo': null
    },
    canvasStyleDataTemp: null, // 页面全局临时存储数据
    componentDataTemp: null, // 画布组件临时存储数据
    mainActiveName: 'PanelMain'
  }
}

const state = getDefaultState()

const mutations = {
  setPanelName: (state, panelName) => {
    state.panelName = panelName
  },
  setMainActiveName: (state, mainActiveName) => {
    state.mainActiveName = mainActiveName
  },
  setPanelInfo: (state, panelInfo) => {
    state.panelInfo = panelInfo
  },
  setCanvasStyleDataTemp: (state, canvasStyleDataTemp) => {
    state.canvasStyleDataTemp = canvasStyleDataTemp
  },
  setComponentDataTemp: (state, componentDataTemp) => {
    state.componentDataTemp = componentDataTemp
  }
}

const actions = {
  setPanelName({ commit }, panelName) {
    commit('setPanelName', panelName)
  },
  setMainActiveName({ commit }, mainActiveName) {
    commit('setMainActiveName', mainActiveName)
  },
  setPanelInfo({ commit }, panelInfo) {
    commit('setPanelInfo', panelInfo)
  },
  setCanvasStyleDataTemp({ commit }, canvasStyleDataTemp) {
    commit('setCanvasStyleDataTemp', canvasStyleDataTemp)
  },
  setComponentDataTemp({ commit }, componentDataTemp) {
    commit('setComponentDataTemp', componentDataTemp)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

