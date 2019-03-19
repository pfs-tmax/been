/**
		 * @namespace top
		 * @description
		 */
		Top = (function() {
		    function Top() {}
		    Top.version = "";
		    /**
		     * @method getVersion
		     * @return string
		     * @description 현재 top.js의 버전을 반환한다.
		     */
		    Top.getVersion = function() {
		        return this.version;
		    };
		    Top.setVersion = function(version) {
		        this.version = version;
		    };
		    Top.doNotUseThisFuncEver = function(b) {
		    };
		    
		    Top.libsPath = "";
		    Top.configs = {};
		    Top.events = {
		        onCreate: [],
		        onBeforeLoad: [],
		        onLoad: [],
		        onRouteActivate: function() {
		            return true;
		        },
		        onRouteDeactivate: function() {
		            return true;
		        },
		        onWidgetAttach: {},
		        onWidgetDetach: {},
		        onLibsLoad: {}
		    };
		    Top.routes = {};
		    Top.modules = {};
		    Top.pages = {};
		    Top.pageSrcMap = {};
		    Top.curPage = null;
		    Top.curRoute = {};
		    Top.dialogList = {};
		    Top.autoComleteContainers = [];
		    return Top;
		})();
		
		/**
		 * @namespace app
		 * @description
		 */
		Top.App = (function() {
		    App.prototype = Object.create(Top.prototype);
		    App.prototype.constructor = App;
		    App.checkLocationHash = false; // browser의 url 입력할 때, location.hash로 url이 변경되는 경우 check.
		
		    function App() {}
		    /**
		     * @method create
		     * @parameter options - 옵션
		     * @description top.js 앱을 생성한다.
		     */
		    App.create = function(options) {};
		
		    App.onLoadUserLogic = function(callback) {};
		
		    /**
		     * @method getConfig
		     * @parameter key
		     * @return string or object
		     * @description key에 해당하는 config 값을 반환한다.
		     */
		    App.getConfig = function(key) {};
		
		    /**
		     * @method getConfigs
		     * @return object
		     * @description 전체 config 값을 반환한다.
		     */
		    App.getConfigs = function() {};
		
		    /**
		     * @method setTitle
		     * @parameter title
		     * @description 브라우저 타이틀을 설정한다.
		     */
		    App.setTitle = function(title) {};
		
		    /**
		     * @method onBeforeLoad
		     * @parameter function
		     * @description beforeLoad 시점에 호출될 콜백 함수를 등록한다.
		     */
		    App.onBeforeLoad = function(func) {};
		
		    /**
		     * @method onLoad
		     * @parameter function
		     * @description load 시점에 호출될 콜백 함수를 등록한다.
		     */
		    App.onLoad = function(func) {};
		
		    /**
		     * @method isLoaded
		     * @return boolean
		     * @description 앱이 load 되었는지 여부를 반환한다.
		     */
		    App.isLoaded = function() {};
		
		    App.addEvent = function(event) {};
		
		    /**
		     * @method addRoute
		     * @parameter routings
		     * @description 라우팅 설정을 추가한다.
		     */
		    App.addRoute = function(routings) {};
		
		    /**
		     * @method removeRoute
		     * @parameter path
		     * @description 해당 라우팅을 제거한다.
		     */
		    App.removeRoute = function(path) {
		        delete Top.routes[path];
		    };
		
		    /**
		     * @method routeTo
		     * @parameter path - 이동할 path
		     * @parameter data - 라우팅 시 전달할 데이터
		     * @description path로 라우팅을 한다.
		     */
		    App.routeTo = function(path, data, __popstate) {};
		
		    /**
		     * @method onLoad404
		     * @parameter function
		     * @description 404page로 라우팅 전, 404page의 home버튼과 연결될 경로를 function으로 설정.
		     */
		    App.onLoad404 = function(fn) {};
		
		    /**
		     * @method reset404
		     * @parameter pageSrc - 커스터마이징하여 새로 설정할 404page의 경로
		     * @parameter imageSrc - 새로 설정할 404page내부에 들어갈 image의 경로
		     * @description Top에서 기본으로 제공하는 404page가 아닌, 사용자가 커스터마이징하여 만든 404page를 사용할 수 있도록 설정.
		     */
		    App.reset404 = function(pageSrc, imageSrc) {};
		
		    /**
		     * @method load404Page 
		     * @parameter function
		     * @description 404page로 라우팅한다.
		     */
		    App.load404Page = function() {}
		
		    /**
		     * @method reset403
		     * @parameter pageSrc - 커스터마이징하여 새로 설정할 403page의 경로
		     * @parameter imageSrc - 새로 설정할 403page내부에 들어갈 image의 경로
		     * @description Top에서 기본으로 제공하는 403page가 아닌, 사용자가 커스터마이징하여 만든 403page를 사용할 수 있도록 설정.
		     */
		    App.reset403 = function(pageSrc, imageSrc) {};
		
		    /**
		     * @method load403Page
		     * @parameter function
		     * @description 403page로 라우팅하며, function을 통해 403page의 home버튼과 연결될 원하는 경로 설정 가능.
		     */
		    App.load403Page = function(fn) {};
		
		    /**
		     * @method back
		     * @description (브라우저 기능과 동일하게) 뒤로 이동한다.
		     */
		    App.back = function() {};
		
		    /**
		     * @method forward
		     * @description (브라우저 기능과 동일하게) 앞으로 이동한다.
		     */
		    App.forward = function() {};
		
		    /**
		     * @method openWindow
		     * @parameter path - 이동할 routing path
		     * @parameter name - 새 창 이름 (Javascript Window.open() 참고)
		     * @parameter features - 새 창 설정 (Javascript Window.open() 참고)
		     * @description path를 새 창으로 띄운다.
		     */
		    App.openWindow = function(path, name, features) {};
		
		    /**
		     * @method goToPage
		     * @parameter pageId - 이동할 page의 id
		     * @description pageId를 갖는 page로 이동한다.
		     */
		    App.goToPage = function(pageId) {};
		
		    /**
		     * @method getPages
		     * @return object
		     * @description 전체 page 리스트를 반환한다.
		     */
		    App.getPages = function() {};
		
		    /**
		     * @method getCurrentPage
		     * @return Top.Widget.Page
		     * @description 현재 page를 반환한다.
		     */
		    App.getCurrentPage = function() {};
		
		    /**
		     * @method getPage
		     * @parameter pageId
		     * @return Top.Widget.Page
		     * @description pageId에 해당하는 page를 반환한다.
		     */
		    App.getPage = function(pageId) {};
		
		    App.getPageIdBySrc = function(src) {};
		
		    /**
		     * @method onWidgetAttach
		     * @parameter widgetId
		     * @parameter function - 등록할 콜백 리스너
		     * @description widgetId에 해당하는 widget이 attach 됐을 때 실행할 콜백 함수를 등록한다.
		     */
		    App.onWidgetAttach = function(widgetId, func) {};
		
		    /**
		     * @method onWidgetDetach
		     * @parameter widgetId
		     * @parameter function - 등록할 콜백 리스너
		     * @description widgetId에 해당하는 widget이 detach 됐을 때 실행할 콜백 함수를 등록한다.
		     */
		    App.onWidgetDetach = function(widgetId, func) {};
		
		    /**
		     * @method isWidgetAttached
		     * @parameter widgetId
		     * @return boolean
		     * @description widgetId에 해당하는 widget의 attach 여부를 반환한다.
		     */
		    App.isWidgetAttached = function(widgetId) {};
		
		    /**
		     * @method onRouteActivate
		     * @parameter function
		     * @description 라우팅 activate 시 실행할 콜백 함수를 등록한다.
		     */
		    App.onRouteActivate = function(func) {};
		
		    /**
		     * @method onRouteDeactivate
		     * @parameter function
		     * @description 라우팅 deactivate 시 실행할 콜백 함수를 등록한다.
		     */
		    App.onRouteDeactivate = function(func) {};
		
		    /**
		     * @method current
		     * @return object
		     * @description 현재 라우팅 정보를 반환한다.
		     */
		    App.current = function() {};
		
		    App.addDialog = function(id, dialog) {};
		
		    App.removeDialog = function(id) {};
		
		    App.getDialogs = function() {};
		
		    /**
		     * @method closeDialogs
		     * @description 현재 열려있는 전체 다이얼로그를 닫는다.
		     */
		    App.closeDialogs = function() {};
		
		    /**
		     * @method openDialog
		     * @description 새로운 다이얼로그를 생성하여 띄운다.
		     */
		    App.openDialog = function(params) {};
		
		    App.addAutoCompleteContainer = function(autoCompleteContainer) {
		        Top.autoComleteContainers.push(autoCompleteContainer);
		    }
		
		    /**
		     * @method closeAutoCompleteContainers
		     * @description 현재 열려있는 자동 완성 창(textfield 및 textarea)을 닫는다.
		     */
		    App.closeAutoCompleteContainers = function() {};
		
		    /**
		     * @method closeOpenedSelectBox
		     * @description 현재 열려있는 셀렉트박스를 닫는다.
		     */
		    App.closeOpenedSelectBox = function() {}
		
		    /**
		     * @method createBlur
		     * @parameter focusedWidgets (string or object)
		     * @return Top.Widget.Layout
		     * @description focusedWidgets을 제외하고 화면을 blur 처리하며 blur 레이어의 layout을 반환한다.
		     */
		    App.createBlur = function(focusedWidgets) {
		        return App;
		    };
		
		    /**
		     * @method removeBlur
		     * @description blur 처리를 제거한다.
		     */
		    App.removeBlur = function() {
		        return App;
		    }
		})();
		
		
		/**
		 * @namespace action
		 * @description
		 */
		Top.Action = (function() {
		    Action.prototype = Object.create(Top.prototype);
		    Action.prototype.constructor = Action;
		
		    function Action() {}
		
		    Action.windowCreate = function(params) {
		
		    };
		
		    Action.windowDestroy = function(params) {
		
		    };
		
		    Action.pageNavigate = function(params) {};
		
		    Action.widgetCreate = function(params) {};
		
		    Action.widgetDestroy = function(params) {};
		
		    Action.widgetChange = function(params) {};
		
		    Action.widgetMove = function(params) {};
		
		    Action.FragmentShow = function(params) {};
		
		    Action.FragmentRemove = function(params) {};
		
		    Action.dialogCreate = function(params) {
		        return Action;
		    }
		})();
		
		/**
		 * @namespace data
		 * @description Top.Data를 통해 data를 정의하고 위젯 속성과의 바인딩을 할 수 있다.
		 */
		Top.Data = (function() {
		    Data.prototype = Object.create(Top.prototype);
		    Data.prototype.constructor = Data;
		
		    Data.map = {};
		    Data.prototype.__allValues = {};
		    Data.prototype.__boundWidgets = {};
		    Data.prototype.__boundDevices = {};
		    Data.prototype.__initialValues = {};
		    Data.prototype.__isBackward = false; // backward compatibility
		    Data.prototype.__modelInfo = {};
		
		    function Data(obj, name) {}
		
		    /**
		     * @method create
		     * @parameter name (string)
		     * @parameter data (object)
		     * @return Top.Data
		     * @description name을 이름으로 하고 data를 갖는 Top.Data 객체를 생성한다.
		     */
		    Data.create = function(name, data) {
		      
		    };
		
		    /**
		     * @method .getValues
		     * @return object
		     * @description 전체 value를 반환한다.
		     */
		    Data.prototype.getValues = function() {
		        var values = {};
		        return values;
		    };
		
		    /**
		     * @method .getValues
		     * @parameter path (string)
		     * @return object
		     * @description path에 해당하는 value를 반환한다.
		     */
		    Data.prototype.getValue = function(path) {};
		
		    Data.prototype.getData = function(keys) {};
		
		    Data.prototype.setData = function(values) {
		    };
		
		    /**
		     * @method .setValues
		     * @parameter values (object)
		     * @description 전체 value를 입력한다.
		     */
		    Data.prototype.setValues = function(values) {
		    };
		
		    /**
		     * @method .setValue
		     * @parameter path (string)
		     * @parameter value (object)
		     * @description path에 해당하는 value를 입력한다.
		     */
		    Data.prototype.setValue = function(path, value, __fromWidgetId, __isFromDevice) {
		    };
		
		    /**
		     * @method .addValue
		     * @parameter path (string)
		     * @parameter value (object)
		     * @description path에 해당하는 array의 value를 추가한다.
		     */
		    Data.prototype.addValue = function(path, value) {
		    };
		
		    /**
		     * @method .removeValue
		     * @parameter path (string)
		     * @parameter index (object)
		     * @description path에 해당하는 array의 index를 제거한다.
		     */
		    Data.prototype.removeValue = function(path, index) {
		    };
		
		    /**
		     * @method .reset
		     * @parameter path (string)
		     * @description 생성 시점의 값으로 초기화한다.
		     */
		    Data.prototype.reset = function(path) {
		    };
		
		    /**
		     * @method .update
		     * @parameter path (string)
		     * @description 해당 path와 바인딩된 위젯을 업데이트한다.
		     */
		    Data.prototype.update = function(path) {
		    };
		
		    Data.prototype.setModel = function(field, modelId) {
		    };
		
		    Data.prototype.getModel = function() {
		    };
		
		    Data.prototype.setRelations = function(relations) {
		    };
		
		    Data.prototype.getRelations = function() {
		    };
		
		    Data.prototype.getDataByRelations = function(relationsId) {
		      
		    };
		
		    Data.prototype.getRelationsById = function(relationsId) {
		       
		    };
		
		    Data.prototype.getRootId = function(relationsId) {
		       
		    };
		
		    Data.createModel = function(packageName, id, dataFields) {
		       
		    };
		
		    Data.getDataModel = function(id) {
		    };
		
		    Data.createClass = function(packageName, id, fieldNames) {
		      
		    };
		
		    Data.getClass = function(className) {
		    };
		
		    /**
		     * @method .toTreeNodes
		     * @parameter origin (object)
		     * @parameter keyMap (object)
		     * @return object
		     * @description Top.Widget.Treeview에 바인딩하기 위해 1차원 데이터를 tree 구조 데이터로 변환한다.
		     */
		    Data.toTreeNodes = function(origin, keyMap) {
		    };
		
		    Data.syncTreeNodes = function(nodes) {};
		})();
		
		/**
		 * @namespace model
		 * @description
		 */
		Top.Model = (function() {
		    Model.prototype = Object.create(Top.prototype);
		    Model.prototype.constructor = Model;
		
		    function Model() {}
		
		    return Model;
		})();
		
		/**
		 * @namespace modelcontroller
		 * @description
		 */
		Top.Model.Controller = (function() {
		    Controller.prototype = Object.create(Top.Model.prototype);
		    Controller.prototype.constructor = Controller;
		
		    function Controller(obj) {
		        Object.assign(this, obj);
		    }
		
		    Controller.create = function(obj) {
		        return new Controller(obj);
		    }
		
		    return Controller;
		})();
		
		/**
		 * @namespace datacontroller
		 * @description
		 */
		Top.DataController = (function() {
		    DataController.prototype = Object.create(Top.prototype);
		    DataController.prototype.constructor = DataController;
		
		    function DataController(obj) {
		    }
		
		    DataController.create = function(obj) {
		        return new DataController(obj);
		    };
		
		    return DataController;
		})();
		
		/**
		 * @namespace dom
		 * @description
		 */
		Top.Dom = (function() {
		    Dom.prototype = Object.create(Top.prototype);
		    Dom.prototype.constructor = Dom;
		
		    function Dom() {}
		
		    /**
		     * @method selectById
		     * @parameter id (string)
		     * @return Top.Widget
		     * @description id에 해당하는 Top.Widget 객체를 DOM에서 찾아 반환한다.
		     */
		    Dom.selectById = function(id) {
		    };
		
		    /**
		     * @method selectByTagName
		     * @parameter tagName (string)
		     * @return Array[Top.Widget]
		     * @description tagName에 해당하는 Top.Widget 객체를 DOM에서 찾아 반환한다.
		     */
		    Dom.selectByTagName = function(tagName) {
		    };
		
		    /**
		     * @method select
		     * @parameter selector (string)
		     * @return Array[Top.Widget]
		     * @description selector에 해당하는 Top.Widget 객체를 DOM에서 찾아 반환한다.
		     */
		    Dom.select = function(selector) {
		    };
		
		    /**
		     * @method appendToBody
		     * @parameter widget (Top.Widget)
		     * @description widget을 body에 append한다.
		     */
		    Dom.appendToBody = function(widget) {
		    };
		
		    /**
		     * @method appendChild
		     * @parameter parentId (string)
		     * @parameter widget (Top.Widget) or widgetId (string)
		     * @description widget을 parentId를 갖는 parent에 append 한다.
		     */
		    Dom.appendChild = function(parentId, widget) {
		    };
		
		    /**
		     * @method insertBefore
		     * @parameter referId (string)
		     * @parameter widget (Top.Widget) or widgetId (string)
		     * @description widget을 referId를 갖는 refer 앞에 insert 한다.
		     */
		    Dom.insertBefore = function(referId, widget) {
		    };
		
		    /**
		     * @method remove
		     * @parameter widgetId (string)
		     * @description widgetId를 갖는 widget을 DOM에서 제거한다.
		     */
		    Dom.remove = function(widgetId) {
		    };
		
		    return Dom;
		})();
		
		/**
		 * @namespace ajax
		 * @description Top.Ajax를 통해 ajax를 수행할 수 있다.
		 */
		Top.Ajax = (function() {
		    Ajax.prototype = Object.create(Top.prototype);
		    Ajax.prototype.constructor = Ajax;
		
		    function Ajax() {}
		
		    /**
		     * @method execute
		     * @parameter url (string)
		     * @parameter settings (object)
		     * @description ajax를 실행한다.
		     */
		    Ajax.execute = function(url, settings) {
		       
		    };
		
		    Ajax.executeById = function(id) {
		    };
		
		    Ajax.get = function(url, request, response, onSuccess, onFail) {
		      
		    };
		
		    Ajax.post = function(url, request, response, onSuccess, onFail) {
		        
		    };
		
		    Ajax.toQueryString = function(data) {
		    };
		
		    return Ajax;
		})();
		
		/**
		 * @namespace device
		 * @description
		 */
		Top.Device = (function() {
		    Device.prototype = Object.create(Top.prototype);
		    Device.prototype.constructor = Device;
		
		    Device.prototype.id = "";
		    Device.prototype.__boundWidgets = {};
		    Device.prototype.__boundData = {};
		
		    function Device(obj) {
		      
		    }
		
		    Device.create = function(obj) {
		    };
		
		    Device.prototype.getValue = function(path) {
		       
		    };
		
		    Device.prototype.setValue = function(path, value) {
		      
		    };
		
		    return Device;
		})();
		
		/**
		 * @namespace restapi
		 * @description
		 */
		Top.Device.RestAPI = (function() {
		    RestAPI.prototype = Object.create(Top.Device.prototype);
		    RestAPI.prototype.constructor = RestAPI;
		
		    RestAPI.prototype.host = "";
		    RestAPI.prototype.url = "";
		    RestAPI.prototype.dataType = "JSON";
		    RestAPI.prototype.sync = true;
		    RestAPI.prototype.requestHeaderData = "";
		    RestAPI.prototype.requestBodyData = "";
		    RestAPI.prototype.status = "";
		    RestAPI.prototype.statusCode = "";
		    RestAPI.prototype.headerData = "";
		    RestAPI.prototype.responseBodyData = "";
		    RestAPI.prototype.onComplete = function() {};
		    RestAPI.prototype.onSuccess = function() {};
		    RestAPI.prototype.onFailure = function() {};
		
		    function RestAPI(obj) {
		        Object.assign(this, obj);
		    }
		
		    RestAPI.create = function(obj) {
		        return new RestAPI(obj);
		    };
		
		    RestAPI.prototype.__init = function() {
		        if (!this.host) this.host = "";
		        if (!this.url) this.url = "";
		        if (!this.dataType) this.dataType = "JSON";
		        if (!this.sync) this.sync = true;
		        if (!this.requestHeaderData) this.requestHeaderData = "";
		        if (!this.requestBodyData) this.requestBodyData = "";
		    };
		
		    RestAPI.prototype.get = function() {
		        this.__ajax("GET");
		    };
		
		    RestAPI.prototype.post = function() {
		        this.__ajax("POST");
		    };
		
		    RestAPI.prototype.put = function() {
		        this.__ajax("PUT");
		    };
		
		    RestAPI.prototype.delete = function() {
		        this.__ajax("DELETE");
		    };
		
		    RestAPI.prototype.getDataType = function() {
		        return this.dataType;
		    }
		
		    RestAPI.prototype.getDeviceType = function() {
		        return "RestAPI";
		    }
		
		    RestAPI.prototype.getHeaderData = function() {
		        return this.headerData;
		    }
		
		    RestAPI.prototype.getHost = function() {
		        return this.host;
		    }
		
		    RestAPI.prototype.getRequestBodyData = function() {
		        return this.requestBodyData;
		    }
		
		    RestAPI.prototype.getResponse = function() {
		        return this.responseBodyData;
		    }
		
		    RestAPI.prototype.getResponseBodyData = function() {
		        return this.responseBodyData;
		    }
		
		    RestAPI.prototype.getStatus = function() {
		        return this.status;
		    }
		
		    RestAPI.prototype.getStatusCode = function() {
		        return this.statusCode;
		    }
		
		    RestAPI.prototype.getUrl = function() {
		        return this.url;
		    }
		
		    RestAPI.prototype.isSync = function() {
		        return this.sync;
		    }
		
		    RestAPI.prototype.setDataType = function(dataType) {
		        this.dataType = dataType;
		    }
		
		    RestAPI.prototype.setHeaderData = function(headerData) {
		        this.headerData = headerData;
		    }
		
		    RestAPI.prototype.setHost = function(host) {
		        this.host = host;
		    }
		
		    RestAPI.prototype.setRequestBodyData = function(requestBodyData) {
		        this.requestBodyData = requestBodyData;
		    }
		
		    RestAPI.prototype.setStatus = function(status) {
		        this.status = status;
		    }
		
		    RestAPI.prototype.setSync = function(sync) {
		        this.sync = sync;
		    }
		
		    RestAPI.prototype.setUrl = function(url) {
		        this.url = url;
		    }
		
		    return RestAPI;
		})();
		
		/**
		 * @namespace filechooser
		 * @description
		 */
		Top.Device.FileChooser = (function() {
		    FileChooser.prototype = Object.create(Top.Device.prototype);
		    FileChooser.prototype.constructor = FileChooser;
		
		    FileChooser.prototype.id = "";
		    FileChooser.prototype.title = "";
		    FileChooser.prototype.windowId = "";
		    FileChooser.prototype.saveAs = "";
		    FileChooser.prototype.extFilter = "";
		    FileChooser.prototype.defaultExt = "";
		    FileChooser.prototype.defaultPath = "";
		    FileChooser.prototype.path = "";
		    FileChooser.prototype.responseString = "";
		    FileChooser.prototype.File = null;
		    FileChooser.prototype.onFileChoose = function() {};
		
		    function FileChooser(obj) {
		        Object.assign(this, obj);
		    }
		
		    /**
		     * @method create
		     * @parameter settings (object)
		     * @description Filechooser를 생성한다.
		     */
		    FileChooser.create = function(obj) {
		        return new FileChooser(obj);
		    };
		
		    FileChooser.prototype.getDeviceType = function() {
		        return "FileChooser";
		    };
		
		    FileChooser.prototype.getTitle = function() {
		        return this.title;
		    };
		
		    FileChooser.prototype.setTitle = function(title) {
		        this.title = title;
		    };
		
		    FileChooser.prototype.getWindowId = function() {
		        return this.windowId;
		    };
		
		    FileChooser.prototype.setWindowId = function(windowId) {
		        this.windowId = windowId;
		    };
		
		    FileChooser.prototype.getSaveAs = function() {
		        return this.saveAs;
		    };
		
		    FileChooser.prototype.setSaveAs = function(saveAs) {
		        this.saveAs = saveAs;
		    };
		
		    FileChooser.prototype.getDefaultExt = function() {
		        return this.defaultExt;
		    };
		
		    FileChooser.prototype.setDefaultExt = function(defaultExt) {
		        this.defaultExt = defaultExt;
		    };
		
		    FileChooser.prototype.getExtFilter = function() {
		        return this.extFilter;
		    };
		
		    FileChooser.prototype.setExtFilter = function(extFilter) {
		        this.extFilter = extFilter;
		    };
		
		    FileChooser.prototype.getDefaultPath = function() {
		        return this.defaultPath;
		    };
		
		    FileChooser.prototype.setDefaultPath = function(defaultPath) {
		        this.defaultPath = defaultPath;
		    };
		    FileChooser.prototype.getMultiple = function() {
		        return this.multiple;
		    };
		
		    FileChooser.prototype.setMultiple = function(multiple) {
		        this.multiple = multiple;
		    };
		    FileChooser.prototype.getFolder = function() {
		        return this.webkitdirectory;
		    };
		
		    FileChooser.prototype.setFolder = function(folder) {
		        this.webkitdirectory = folder;
		    };
		
		    FileChooser.prototype.getPath = function() {
		        return this.path;
		    };
		
		    FileChooser.prototype.setPath = function(path) {
		        this.path = path;
		    };
		
		    FileChooser.prototype.getFile = function() {
		        return this.file;
		    };
		
		    FileChooser.prototype.setFile = function(file) {
		        this.file = file;
		
		    }
		    FileChooser.prototype.getSrc = function() {
		        return this.src;
		    }
		    FileChooser.prototype.read = function() {
		    }
		
		    /**
		     * @method .show
		     * @description Filechooser를 실행한다.
		     */
		    FileChooser.prototype.show = function() {};
		
		    return FileChooser;
		})();
		
		/**
		 * @namespace controller
		 * @description Controller를 정의하고 view와의 바인딩을 통해 scope를 설정할 수 있다.
		 */
		Top.Controller = (function() {
		    Controller.prototype = Object.create(Top.prototype);
		    Controller.prototype.constructor = Controller;
		
		    function Controller(obj) {
		        Object.assign(this, obj);
		    }
		
		    Controller.map = {};
		
		    /**
		     * @method create
		     * @parameter name (string)
		     * @parameter controller (object)
		     * @description Controller를 생성한다.
		     */
		    Controller.create = function(name, controller) {
		    };
		
		    Controller.onLoad = function(controller, callback) {
		        if (!controller.hasOwnProperty("__loadEvents")) {
		            controller.__loadEvents = [];
		        }
		
		        controller.__loadEvents.push(callback);
		    };
		
		    /**
		     * @method set
		     * @parameter name (string)
		     * @parameter controller (object)
		     * @description name을 갖는 controller를 설정한다.
		     */
		    Controller.set = function(name, controller) {
		        this.map[name] = controller;
		    };
		
		    /**
		     * @method get
		     * @parameter name (string)
		     * @description name에 해당하는 controller를 반환한다.
		     */
		    Controller.get = function(name) {
		        return this.map[name];
		    };
		
		    /**
		     * @method setAppController
		     * @parameter controller (object)
		     * @description appController를 설정한다.
		     */
		    Controller.setAppController = function(controller) {
		        Controller.appController = controller;
		    };
		
		    /**
		     * @method getAppController
		     * @return Top.Controller
		     * @description appController 객체를 반환하여 존재하지 않을 경우 window 객체를 반환한다.
		     */
		    Controller.getAppController = function() {
		        return Controller.appController || window;
		    };
		    Controller.prototype.onInit = function(callback) {
		        if (typeof callback === 'function') {
		            this.__initEvents.push(callback);
		        }
		    };
		
		    Controller.prototype.isLoaded = function() {
		        return this.__loaded;
		    };
		
		    Controller.prototype.getName = function() {
		        return this.__name;
		    };
		
		    return Controller;
		})();
		
		/**
		 * @namespace module
		 * @description
		 */
		Top.Module = (function() {
		    Module.prototype = Object.create(Top.prototype);
		    Module.prototype.constructor = Module;
		
		    function Module() {}
		
		    Module.create = function(module) {
		        this.__moduleList[this.__curName] = module;
		    };
		
		    Module.load = function(name, callback) {
		    };
		
		    return Module;
		})();
		
		/**
		 * @namespace util
		 * @description
		 */
		Top.Util = (function() {
		    Util.prototype = Object.create(Top.prototype);
		    Util.prototype.constructor = Util;
		
		    function Util() {}
		
		    /**
		     * @method guid
		     * @return string
		     * @description 16자리의 guid를 생성하여 반환한다.
		     */
		    Util.guid = function() {
		    };
		
		    Util.isTopData = function(strValue) {
		    };
		
		    Util.getFileExtension = function(fileName) {
		    };
		
		    Util.getFileName = function(path) {
		    };
		
		    Util.namespace = function(string, widget) {
		    };
		
		    Util.getDataName = function(path, widget) {
		    };
		
		    Util.createGetterSetter = function(object) {
		    };
		
		    Util.capitalizeFirstLetter = function(string) {
		    };
		
		    Util.toCamelCase = function(string) {
		    };
		    Util.toUnderscore = function(string) {
		    };
		
		    Util.toDash = function(string) {
		    };
		    return Util;
		})();
		
		/**
		 * @namespace browser
		 * @description
		 */
		Top.Util.Browser = (function() {
		    Browser.prototype = Object.create(Top.Util.prototype);
		    Browser.prototype.constructor = Browser;
		
		    function Browser() {}
		
		    Browser.isOpera = function() {
		    };
		
		    Browser.isFirefox = function() {
		    };
		
		    Browser.isSafari = function() {
		    };
		
		    Browser.isIE = function() {
		    };
		
		    Browser.isEdge = function() {
		    };
		
		    Browser.isChrome = function() {
		    };
		
		    Browser.isBlink = function() {
		    };
		
		    Browser.getIEVersion = function() {
		    }
		
		    return Browser;
		})();
		
		/**
		 * @namespace i18n
		 * @description Top.i18n을 통해 국제화 지원이 가능하다.
		 */
		Top.i18n = (function() {
		    i18n.prototype = Object.create(Top.prototype);
		    i18n.prototype.constructor = i18n;
		
		    function i18n() {}
		
		    i18n.map = {};
		
		    /**
		     * @method load
		     * @parameter settings (object)
		     * @description i18n 설정을 불러온다.
		     */
		    i18n.load = function(settings) {
		    };
		    /**
		     * @method t
		     * @parameter key (string)
		     * @parameter default value (string)
		     * @return string
		     * @description key에 해당하는 i18n value를 반환한다. 해당 key가 없을 경우 default value를 입력하였을 시 해당 값이 반환된다.
		     */
		    i18n.t = function(key, defaultValue) {
		    };
		
		    /**
		     * @method onLoad
		     * @parameter callback (function)
		     * @description i18n load 시 호출할 콜백을 등록한다.
		     */
		    i18n.onLoad = function(callback) {
		    };
		
		    /**
		     * @method isLoaded
		     * @return boolean
		     * @description i18n 설정이 로드되었는지 여부를 반환한다.
		     */
		    i18n.isLoaded = function() {
		    };
		
		    /**
		     * @method set
		     * @parameter settings (object)
		     * @description i18n을 설정한다.
		     */
		    i18n.set = function(obj) {
		    };
		
		    /**
		     * @method get
		     * @return object
		     * @description i18n 정보를 반환한다.
		     */
		    i18n.get = function() {
		    };
		
		    return i18n;
		})();
		
		/**
		 * @namespace livereload
		 * @description
		 */
		Top.LiveReload = (function() {
		    LiveReload.prototype = Object.create(Top.prototype);
		    LiveReload.prototype.constructor = LiveReload;
		
		    function LiveReload(obj) {
		    }
		
		    LiveReload.create = function(obj) {
		        return new LiveReload(obj);
		    };
		
		    LiveReload.prototype.connect = function() {
		    };
		
		    LiveReload.prototype.sendCommand = function(command) {
		    };
		
		    LiveReload.prototype.parseMessage = function(data) {
		    };
		
		    LiveReload.prototype.reload = function(message) {
		    };
		
		    LiveReload.prototype.reloadPage = function() {
		        window.document.location.reload();
		    };
		
		    LiveReload.prototype.alert = function(message) {
		        alert(message.message);
		    };
		
		    return LiveReload;
		})();
		
		/**
		 * @namespace drawablemanager
		 * @description
		 */
		Top.DrawableManager = (function() {
		    DrawableManager.prototype = Object.create(Top.prototype);
		    DrawableManager.prototype.constructor = DrawableManager;
		
		    function DrawableManager() {}
		
		    DrawableManager.__map = {};
		
		    DrawableManager.create = function(obj) {
		        Object.assign(DrawableManager.__map, obj);
		    };
		
		    /**
		     * @method get
		     * @parameter id (string)
		     * @return object
		     * @description id에 해당하는 drawable의 value를 반환한다.
		     */
		    DrawableManager.get = function(id) {
		        return DrawableManager.__map[id];
		    };
		
		    return DrawableManager;
		})();
		
		/**
		 * @namespace rawmanager
		 * @description
		 */
		Top.RawManager = (function() {
		    RawManager.prototype = Object.create(Top.prototype);
		    RawManager.prototype.constructor = RawManager;
		
		    function RawManager() {}
		    RawManager.create = function(obj) {
		        var keys = Object.keys(obj);
		        var newObj = {};
		        for (var i = 0, len = keys.length; i < len; i++) {
		            newObj[keys[i].split(".")[0]] = obj[keys[i]];
		        }
		        Object.assign(RawManager.__map, newObj);
		    };
		
		    /**
		     * @method get
		     * @parameter id (string)
		     * @return object
		     * @description id에 해당하는 raw의 value를 반환한다.
		     */
		    RawManager.get = function(id) {
		        return RawManager.__map[id];
		    };
		
		    return RawManager;
		})();
		
		/**
		 * @namespace valuesmanager
		 * @description
		 */
		Top.ValuesManager = (function() {
		    ValuesManager.prototype = Object.create(Top.prototype);
		    ValuesManager.prototype.constructor = ValuesManager;
		
		    function ValuesManager() {}
		
		    ValuesManager.create = function(type, obj) {
		        Object.assign(ValuesManager.__map[type], obj);
		    };
		
		    /**
		     * @method get
		     * @parameter id (string)
		     * @return object
		     * @description id에 해당하는 values의 value를 반환한다.
		     */
		    ValuesManager.get = function(type, id) {
		        return ValuesManager.__map[type][id];
		    };
		
		    return ValuesManager;
		})();
		
		/**
		 * @namespace top_contextmenu
		 * @description
		 * @dddd top-contextmnu.js와 겹쳐서 분리
		 */
		Top.ContextMenu = (function() {
		    ContextMenu.prototype = Object.create(Top.prototype);
		    ContextMenu.prototype.constructor = ContextMenu;
		
		    function ContextMenu() {}
		    ContextMenu.create = function(obj) {
		        Object.assign(ContextMenu.__map, obj);
		    };
		
		    ContextMenu.get = function(id) {
		        return ContextMenu.__map[id];
		    };
		
		    ContextMenu.setWidget = function(widget) {
		        this.__widget = widget;
		    };
		
		    ContextMenu.getDom = function() {
		        return this.__widget;
		    };
		
		    ContextMenu.getWidgetById = function(id) {
		        this.__widget.setProperties({ id: id, items: this.get(id) });
		        return this.__widget;
		    };
		
		    return ContextMenu;
		})();
		
		/**
		 * @namespace top_dialog
		 * @description
		 */
		Top.Dialog = (function() {
		    Dialog.prototype = Object.create(Top.prototype);
		    Dialog.prototype.constructor = Dialog;
		
		    function Dialog() {}
		
		
		    Dialog.create = function(id, props) {
		    };
		
		    Dialog.init = function() {
		    };
		
		    return Dialog;
		})();
		
		/**
		 * @namespace top_notification
		 * @description
		 */
		Top.Notification = (function() {
		    Notification.prototype = Object.create(Top.prototype);
		    Notification.prototype.constructor = Notification;
		
		    function Notification() {}
		
		    Notification.create = function(id, props) {
		    };
		
		    Notification.init = function() {
		    };
		
		    return Notification;
		})();
		
		window.addEventListener("popstate", function(event) {
		});
		/**
		 * @namespace loader
		 * @description
		 */
		Top.Loader = (function() {
		    Loader.prototype = Object.create(Top.prototype);
		    Loader.prototype.constructor = Loader;
		
		    function Loader() {}
		
		    /**
		     * @method start
		     * @parameter settings (object)
		     * @description loader를 실행한다.
		     */
		    Loader.start = function(settings) {};
		
		    /**
		     * @method stop
		     * @parameter force (boolean) 또는 settings (object)
		     * @description loader를 중지한다. 기본적으로 start 실행 횟수만큼 stop을 실행해야하며 force가 true일 경우 start 횟수에 관계없이 중지한다.
		     */
		    Loader.stop = function(force) {
		    };
		
		    /**
		     * @method isLoading
		     * @return boolean
		     * @description loader 실행 중 여부를 반환한다.
		     */
		    Loader.isLoading = function() {
		        return this.__isLoading;
		    };
		
		    return Loader;
		})();
		
		Top.EventManager = (function() {
		    EventManager.prototype = Object.create(Top.prototype);
		    EventManager.prototype.constructor = EventManager;
		    EventManager.prototype.events = {};
		    EventManager.prototype.shortCut = false;
		
		    function EventManager() {}
		
		    EventManager.on = function(event, topDom, selector, callback) {
		    };
		
		
		    EventManager.off = function(event, topDom, selector) {
		    };
		
		    EventManager.addShortcut = function(key, callback) {};
		})();
		
		/**
		 * @namespace excel
		 * @description
		 */
		Top.Excel = (function() {
		    Excel.prototype = Object.create(Top.prototype);
		    Excel.prototype.constructor = Excel;
		
		    function Excel() {}
		
		    /**
		     * @method import
		     * @parameter device (object) - 읽을 file의 binary. filechooser의 콜백 파라미터.
		     * @parameter header (array) - excel header(첫 번째 row) 중  import할 header만 array 형태로 기입 시, 해당 column만 import한다. 생략 시, 전체 header import
		     * @parameter callback (function) - import가 끝나고 부를 callback function. 첫 번째 파라미터가 import된 array이다.
		     * @description
		     */
		    Excel.import = function(device, header, callback) {
		    };
		
		    Excel.convertKey = function(XL_row_object, header) {
		    };
		
		    /**
		     * @method export
		     * @parameter tableId (string)
		     * @parameter booktype (string) - xlsx(default)와 csv를 지원한다.
		     * @parameter pageId (string) - 생략 가능하며 생략 시 현재 pageId로 설정한다.
		     * @parameter data (object) - 생략 가능하며 입력 시 table에 보이는 것이 아닌 data 기반으로 export 한다.
		     * @description tableId를 갖는 table을 excel 파일로 export 한다.
		     */
		    Excel.export = function(id, booktype, pageId, tableData) {
		    };
		})