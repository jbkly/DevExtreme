/* eslint-disable */
import Component from './component';
import type { IDataGrid } from '../ui/grids/data_grid/common/types';
import gridCore from '../../ui/data_grid/ui.data_grid.core';
import { updatePropsImmutable } from './utils';

export default class DataGridWrapper extends Component {
    _onInitialized!: Function;

    static registerModule = gridCore.registerModule.bind(gridCore);

    beginUpdate() {
        const gridInstance = (this.viewRef as IDataGrid)?.getComponentInstance();

        super.beginUpdate();
        gridInstance?.beginUpdate();
    }

    endUpdate() {
        const gridInstance = (this.viewRef as IDataGrid)?.getComponentInstance();

        super.endUpdate();
        gridInstance?.endUpdate();
    }

    isReady() {
        const gridInstance = (this.viewRef as IDataGrid)?.getComponentInstance();

        return gridInstance?.isReady();
    }

    getView(name) {
        const gridInstance = (this.viewRef as IDataGrid)?.getComponentInstance();

        return gridInstance?.getView(name);
    }

    getController(name) {
        const gridInstance = (this.viewRef as IDataGrid)?.getComponentInstance();

        return gridInstance?.getController(name);
    }

    state(state) {
        const gridInstance = (this.viewRef as IDataGrid)?.getComponentInstance();

        return gridInstance?.state(state);
    }

    _wrapKeyDownHandler(handler) {
        return handler;
    }

    _optionChanging(fullName: string, value: unknown, prevValue: unknown): void {
        super._optionChanging(fullName, value, prevValue);
        if(this.viewRef) {
            const name = fullName.split(/[.[]/)[0];
            const prevProps = { ...(this.viewRef as IDataGrid).prevProps };
            updatePropsImmutable(prevProps, this.option(), name, fullName);
            (this.viewRef as IDataGrid).prevProps = prevProps;
        }
    }

    _optionChanged(e): void {
        const gridInstance = (this.viewRef as IDataGrid)?.getComponentInstance?.();
        if (e.fullName === 'dataSource' && e.value === gridInstance?.option('dataSource')) {
            gridInstance?.option('dataSource', e.value);
        }
        super._optionChanged(e);
    }

    _createTemplateComponent(templateOption: any): any {
        return templateOption;
    }

    _initializeComponent(): void {
        const options = this.option();
        this._onInitialized = options.onInitialized;
        options.onInitialized = null;
        super._initializeComponent();
    }

    _patchOptionValues(options) {
        options.onInitialized = this._onInitialized;
        return super._patchOptionValues(options);
    }

    _setOptionsByReference() {
        super._setOptionsByReference();

        this._optionsByReference['focusedRowKey'] = true;
        this._optionsByReference['editing.editRowKey'] = true;
        this._optionsByReference['editing.changes'] = true;
    }

    _setDeprecatedOptions() {
        super._setDeprecatedOptions();

        this._deprecatedOptions['useKeyboard'] = { since: '19.2', alias: 'keyboardNavigation.enabled' };
    }
}