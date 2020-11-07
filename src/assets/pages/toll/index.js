const tool = (() => {
    //private var/functions
    function getCategories() {
        if (!document.body.dataset.toolCategories) return null;

        const categories = document.body.dataset.toolCategories.split(",");

        return categories;
    }

    function init() {
        if (document.body.classList.contains("tool"))
            console.log(getCategories());
    }

    return {
        //public var/functions
        init,
    };
})();

tool.init();
