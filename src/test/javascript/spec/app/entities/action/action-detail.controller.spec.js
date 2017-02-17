'use strict';

describe('Controller Tests', function() {

    describe('Action Detail Controller', function() {
        var $scope, $rootScope;
        var MockEntity, MockAction, MockTache;
        var createController;

        beforeEach(inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            MockEntity = jasmine.createSpy('MockEntity');
            MockAction = jasmine.createSpy('MockAction');
            MockTache = jasmine.createSpy('MockTache');
            

            var locals = {
                '$scope': $scope,
                '$rootScope': $rootScope,
                'entity': MockEntity ,
                'Action': MockAction,
                'Tache': MockTache
            };
            createController = function() {
                $injector.get('$controller')("ActionDetailController", locals);
            };
        }));


        describe('Root Scope Listening', function() {
            it('Unregisters root scope listener upon scope destruction', function() {
                var eventType = 'creamApp:actionUpdate';

                createController();
                expect($rootScope.$$listenerCount[eventType]).toEqual(1);

                $scope.$destroy();
                expect($rootScope.$$listenerCount[eventType]).toBeUndefined();
            });
        });
    });

});
