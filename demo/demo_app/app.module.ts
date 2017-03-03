import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home.component";

import { RouterModule } from "@angular/router";

// demo imports
import { TableDemo } from "./table_demo/table-demo.component";
import { CoreDemo } from "./core_demo/core-demo.component";
import { GlyphiconDemo } from "./glyphicon_demo/glyphicon-demo.component";
import { PopoverDemo } from "./popover_demo/popover-demo.component";
import { TabsDemo } from "./tabs_demo/tabs_demo.component";
import { ListViewDemo } from "./list_view_demo/list-view-demo.component";
import { DropdownDemo } from "./dropdown_demo/dropdown_demo.component";
import { TopNavDemo } from "./top_nav_demo/top-nav-demo.component";
import { TreeViewDemo } from "./tree_view_demo/tree-view-demo.component";
import { TypeaheadDemo } from "./typeahead_demo/typeahead-demo.component";
import { SideNavDemo } from "./side_nav_demo/side-nav-demo.component";
import { ModalDemo } from "./modal_demo/modal-demo.component";
import { SampleModalComponent } from "./modal_demo/sample-modal.component";
import { ErrorModalComponent } from "./modal_demo/error-modal.component";
import { XLModalComponent } from "./modal_demo/extra-large.component";
import { FormModalComponent } from "./modal_demo/form-modal.component";
import { TooltipDemo } from "./tooltip_demo/tooltip-demo.component";
import { AlertDemo } from "./alert_demo/alert-demo-component";
import { AlertCustom } from "./alert_demo/alert-demo-custom";
import { CalendarDemo } from "./calendar_demo/calendar-demo.component";
import { DatepickerDemo } from "./datepicker_demo/datepicker-demo.component";
import { SubMenuViewDemo } from "./sub_menu_view_demo/sub-menu-view-demo.component";

// component imports
import {
	TableModule,
	TabsModule,
	GlyphiconModule,
	IconService,
	PopoverModule,
	ListViewModule,
	TreeViewModule,
	DropdownModule,
	TopNavModule,
	TypeaheadModule,
	SideNavModule,
	ModalModule,
	AlertModule,
	AlertService,
	CalendarModule,
	DatepickerModule,
	SubMenuViewModule
} from "./../..";


@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		TableDemo,
		CoreDemo,
		GlyphiconDemo,
		PopoverDemo,
		TabsDemo,
		ListViewDemo,
		DropdownDemo,
		TopNavDemo,
		TreeViewDemo,
		DropdownDemo,
		TypeaheadDemo,
		SideNavDemo,
		ModalDemo,
		SampleModalComponent,
		ErrorModalComponent,
		XLModalComponent,
		FormModalComponent,
		TooltipDemo,
		AlertDemo,
		AlertCustom,
		CalendarDemo,
		DatepickerDemo,
		SubMenuViewDemo
	],
	entryComponents: [
		SampleModalComponent,
		ErrorModalComponent,
		XLModalComponent,
		FormModalComponent,
		AlertCustom
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpModule,
		TableModule,
		TabsModule,
		GlyphiconModule,
		PopoverModule,
		ListViewModule,
		TreeViewModule,
		DropdownModule,
		TopNavModule,
		TypeaheadModule,
		SideNavModule,
		ModalModule,
		AlertModule,
		CalendarModule,
		DatepickerModule,
		SubMenuViewModule,
		RouterModule.forRoot([
			{
				path: "",
				component: HomeComponent
			},
			{
				path: "table",
				component: TableDemo
			},
			{
				path: "css",
				component: CoreDemo
			},
			{
				path: "glyphicon",
				component: GlyphiconDemo
			},
			{
				path: "popover",
				component: PopoverDemo
			},
			{
				path: "tooltip",
				component: TooltipDemo
			},
			{
				path: "tabs",
				component: TabsDemo
			},
			{
				path: "list-view",
				component: ListViewDemo
			},
			{
				path: "tree-view",
				component: TreeViewDemo
			},
			{
				path: "sub-menu-view",
				component: SubMenuViewDemo
			},
			{
				path: "dropdown",
				component: DropdownDemo
			},
			{
				path: "top-nav",
				component: TopNavDemo
			},
			{
				path: "typeahead",
				component: TypeaheadDemo
			},
			{
				path: "side-nav",
				component: SideNavDemo
			},
			{
				path: "modal",
				component: ModalDemo
			},
			{
				path: "alert",
				component: AlertDemo
			},
			{
				path: "calendar",
				component: CalendarDemo
			},
			{
				path: "datepicker",
				component: DatepickerDemo
			}
		], {
			useHash: true
		})
	],
	providers: [IconService, AlertService],
	bootstrap: [AppComponent]
})
export class AppModule { }
