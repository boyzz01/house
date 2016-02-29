var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var TreeNodeCheckedPipe = (function () {
    function TreeNodeCheckedPipe() {
        this.store = [];
    }
    TreeNodeCheckedPipe.prototype.transform = function (node) {
        this.store.length = 0;
        (_a = this.store).push.apply(_a, node.filter(function (node) { return node.checked; }));
        return this.store;
        var _a;
    };
    TreeNodeCheckedPipe = __decorate([
        core_1.Pipe({
            name: 'treeNodeChecked',
            pure: false
        })
    ], TreeNodeCheckedPipe);
    return TreeNodeCheckedPipe;
})();
exports.TreeNodeCheckedPipe = TreeNodeCheckedPipe;
//# sourceMappingURL=TreeNodeCheckedPipe.js.map