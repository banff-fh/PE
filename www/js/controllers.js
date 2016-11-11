angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $location, $ionicHistory ,$window) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('mainList', function($scope,$ionicModal){
  $scope.mainLists = [
      {img:'img/adam.jpg', id:1, name:'张总', company:'德阳工厂', address:'海宁，浙江，中国',desc:'500公斤皮料已送到，450公斤接收入库，50公斤未接收，2016/10/08',like:3,comments:5},
      {img:'img/ben.png', id:2, name:'小刘', company:'德阳工厂', address:'海宁，浙江，中国',desc:'已创建生产，订单号12345678900，2016/10/07',like:2,comments:8},
      {img:'img/mike.png', id:3, name:'我', company:'德阳贸易', address:'杭州，浙江，中国',desc:'已发布产品 PVC，2016/10/06',like:5,comments:3},
      {img:'img/mike.png', id:4, name:'我', company:'德阳贸易', address:'海宁，浙江，中国',desc:'已创建生产订单 PVC 1000米，2016/10/05',like:1,comments:1},
      {img:'img/adam.jpg', id:5, name:'张总', company:'德阳工厂', address:'海宁，浙江，中国',desc:'已发布生产服务 PVC，2016/10/04',like:2,comments:8}
  ];
    $scope.userName = '张文文' ;

    $ionicModal.fromTemplateUrl('templates/new-task-main.html', function(modal) {
        $scope.taskModal = modal;
    }, {
        scope: $scope
    });

    $scope.newTask = function() {
        $scope.taskModal.show();
    };

    $scope.closeNewTask = function() {
        $scope.taskModal.hide();
    }

})
.controller('linkman', function ($scope,$location) {
    $scope.linkmanLists = [
        {id:'1',img:'img/adam.jpg',name:'张总',company:'德阳工厂',address:'海宁，浙江，中国'},
        {id:'2',img:'img/ben.png',name:'小刘',company:'德阳工厂',address:'海宁，浙江，中国'},
        {id:'3',img:'img/ionic.png',name:'Mike',company:'skytrading',address:'Paloalto,CA,USA'},
        {id:'4',img:'img/max.png',name:'李四',company:'蓝天公司',address:'上海,中国'},
        {id:'5',img:'img/mike.png',name:'王总',company:'大海皮料',address:'苏州，江苏，中国'},
        {id:'6',img:'img/perry.png',name:'张三',company:'苏州希尔顿',address:'苏州 ，江苏，中国'},
        {id:'7',img:'img/ben.png',name:'王球童',company:'九桥高尔夫',address:'杭州，浙江，中国'},
        {id:'8',img:'img/perry.png',name:'FabioGrosso',company:'',address:'Turin，Italy'}
    ]
    $scope.userName = '张文文' ;
})