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

export enum BorderStyle {
    None,
    BottomOnly,
    TopOnly,
    LeftOnly,
    RightOnly,
    TopBottom,
    LeftRight,
    Frame,
}

export enum FontWeight {
    Light = 200,
    Normal = 400,
    SemiBold = 600,
    Bold = 800,
}

export enum FontStyle {
    Normal,
    Italic,
}

export enum HideMembers {
    Never,
    Empty,
    ParentName,
}

export enum Zoomed {
    Small = 25,
    Normal = 50,
    Large = 100,
}

export enum TraceEvents {
    convertor = "HierarchySlicer1458836712039: Convertor method",
    update = "HierarchySlicer1458836712039: Update method",
}
