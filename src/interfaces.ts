/*
 *
 * Copyright (c) 2018 Jan Pieter Posthuma / DataScenarios
 *
 * All rights reserved.
 *
 * MIT License.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */

"use strict";
import powerbi from "powerbi-visuals-api";
import { interactivityBaseService, interactivitySelectionService } from "powerbi-visuals-utils-interactivityutils";
import { IFilterTarget } from "powerbi-models";
import { Selection } from "d3-selection";

import * as settings from "./settings";

import IViewport = powerbi.IViewport;
import ValueTypeDescriptor = powerbi.ValueTypeDescriptor;
import ISelectionId = powerbi.visuals.ISelectionId;
import VisualTooltipDataItem = powerbi.extensibility.VisualTooltipDataItem;
import IVisualHost = powerbi.extensibility.visual.IVisualHost;
import SelectableDataPoint = interactivitySelectionService.SelectableDataPoint;
import IInteractivityService = interactivityBaseService.IInteractivityService;
import IBehaviorOptions = interactivityBaseService.IBehaviorOptions;
import InteractivityServiceOptions = interactivityBaseService.InteractivityServiceOptions;

import HierarchySlicerSettings = settings.HierarchySlicerSettings;

export interface IHierarchySlicerDataPoint extends SelectableDataPoint {
    value: string;
    label: string;
    isEmpty: boolean;
    dataType: ValueTypeDescriptor;
    tooltip?: VisualTooltipDataItem[];
    level: number;
    mouseOver?: boolean;
    mouseOut?: boolean;
    isSelectAllDataPoint?: boolean;
    selectable?: boolean;
    partialSelected: boolean;
    isLeaf: boolean;
    isExpand: boolean;
    isHidden: boolean;
    isRagged: boolean;
    ownId: string;
    parentId: string;
    searchStr: string;
    isSearch: boolean;
    orderArray: any[];
    order: number;
    filterTarget?: IFilterTarget;
    selectionId?: ISelectionId;
}

export interface IHierarchySlicerData {
    dataPoints: IHierarchySlicerDataPoint[];
    fullTree: IHierarchySlicerDataPoint[];
    hasSelectionOverride?: boolean;
    settings: HierarchySlicerSettings;
    levels: number;
}

export interface IHierarchySlicerBehaviorOptions extends IBehaviorOptions<IHierarchySlicerDataPoint> {
    hostServices: IVisualHost;
    expanders: Selection<any, any, any, any>;
    slicerBodySpinner: Selection<any, any, any, any>;
    slicerContainer: Selection<any, any, any, any>;
    slicerItemContainers: Selection<any, any, any, any>;
    slicerItemLabels: Selection<any, any, any, any>;
    slicerItemInputs: Selection<any, any, any, any>;
    slicerClear: Selection<any, any, any, any>;
    slicerExpand: Selection<any, any, any, any>;
    slicerCollapse: Selection<any, any, any, any>;
    slicerHeaderText: Selection<any, any, any, any>;
    dataPoints: IHierarchySlicerDataPoint[];
    fullTree: IHierarchySlicerDataPoint[];
    interactivityService: IInteractivityService<IHierarchySlicerDataPoint>;
    interactivityServiceOptions: InteractivityServiceOptions;
    slicerSettings: HierarchySlicerSettings;
    levels: number;
    dataView: powerbi.DataView;
}

export interface IHierarchySlicerTreeViewOptions {
    enter: (selection: Selection<any, any, any, any>) => void;
    exit: (selection: Selection<any, any, any, any>) => void;
    update: (selection: Selection<any, any, any, any>) => void;
    loadMoreData: () => void;
    baseContainer: Selection<any, any, any, any>;
    moreData: boolean;
    rowHeight: number;
    viewport: IViewport;
    scrollEnabled: boolean;
    // isReadMode: () => boolean;
}

export interface IHierarchySlicerTreeView {
    data(data: any[], dataIdFunction: (d: any) => {}, dataAppended: boolean): IHierarchySlicerTreeView;
    rowHeight(rowHeight: number): IHierarchySlicerTreeView;
    viewport(viewport: IViewport): IHierarchySlicerTreeView;
    render(): void;
    empty(): void;
    getRealRowHeight(): number;
}