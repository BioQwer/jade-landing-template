

/**
 * @return the init function to start the module.
 */
prodi.ui.sampleModule1 = (function () {
    
    function init() {
        // Showing an starting comment
        console.log('MODULE #1 IS UP AND RUNNING!');
    }

    return {
        init: init
    };

})();
