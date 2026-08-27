import{a as Dt,b as It,c as Ft,d as Tt,e as At,f as Vt,g as Bt,h as Nt,i as pe,j as Lt,k as zt,l as Wt,m as jt,n as Ht,o as Yt}from"./chunk-AA67RL35.js";import{b as pt,d as E,f as ut,g as mt,j as ft,l as gt,m as _t,r as vt,t as yt}from"./chunk-J4UCBGPY.js";import{a as De,b as W,c as bt,d as Z,e as wt,g as Ie,i as Ct,j as he,k as xt,l as Fe,o as kt,p as _,r as St,s as Ot,t as Rt,u as Te,v as M,w as Et,x as Mt,y as Pt}from"./chunk-ZWXPBBHN.js";import{c as lt,f as ct,g as dt,j as ht}from"./chunk-HV3YZPS7.js";import{g as rt,j as st,m as at}from"./chunk-SDBLFZQ6.js";import{Ab as nt,Db as z,Eb as R,Fb as re,Gb as K,Ib as se,Jb as ae,Kb as le,Na as m,P as C,Q as x,Qb as X,S as H,Sa as oe,Sb as p,Tb as ce,U as u,Ua as L,Ub as A,Va as Ee,Wa as et,X as ie,Za as tt,a as J,ab as D,b as Ze,ba as N,bb as k,c as ee,ca as F,e as $e,f as O,fa as ne,fb as I,ga as T,hb as it,j as Qe,ka as Oe,lb as Me,mb as Y,nb as q,nc as Pe,oa as Re,ob as U,pb as v,qa as B,qb as h,qc as de,rb as c,sb as y,tc as ot,v as te,va as Je,w as Se}from"./chunk-WMMUC3ZZ.js";var Si=20,Ve=(()=>{class n{_ngZone=u(T);_platform=u(W);_renderer=u(L).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new O;_scrolledCount=0;scrollContainers=new Map;register(t){this.scrollContainers.has(t)||this.scrollContainers.set(t,t.elementScrolled().subscribe(()=>this._scrolled.next(t)))}deregister(t){let i=this.scrollContainers.get(t);i&&(i.unsubscribe(),this.scrollContainers.delete(t))}scrolled(t=Si){return this._platform.isBrowser?new $e(i=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let o=t>0?this._scrolled.pipe(Se(t)).subscribe(i):this._scrolled.subscribe(i);return this._scrolledCount++,()=>{o.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):Qe()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((t,i)=>this.deregister(i)),this._scrolled.complete()}ancestorScrolled(t,i){let o=this.getAncestorScrollContainers(t);return this.scrolled(i).pipe(te(r=>!r||o.indexOf(r)>-1))}getAncestorScrollContainers(t){let i=[];return this.scrollContainers.forEach((o,r)=>{this._scrollableContainsElement(r,t)&&i.push(r)}),i}_scrollableContainsElement(t,i){let o=bt(i),r=t.getElementRef().nativeElement;do if(o==r)return!0;while(o=o.parentElement);return!1}static \u0275fac=function(i){return new(i||n)};static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Oi=20,G=(()=>{class n{_platform=u(W);_listeners;_viewportSize=null;_change=new O;_document=u(F);constructor(){let t=u(T),i=u(L).createRenderer(null,null);t.runOutsideAngular(()=>{if(this._platform.isBrowser){let o=r=>this._change.next(r);this._listeners=[i.listen("window","resize",o),i.listen("window","orientationchange",o)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(t=>t()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let t={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),t}getViewportRect(){let t=this.getViewportScrollPosition(),{width:i,height:o}=this.getViewportSize();return{top:t.top,left:t.left,bottom:t.top+o,right:t.left+i,height:o,width:i}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let t=this._document,i=this._getWindow(),o=t.documentElement,r=o.getBoundingClientRect(),s=-r.top||t.body?.scrollTop||i.scrollY||o.scrollTop||0,a=-r.left||t.body?.scrollLeft||i.scrollX||o.scrollLeft||0;return{top:s,left:a}}change(t=Oi){return t>0?this._change.pipe(Se(t)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let t=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:t.innerWidth,height:t.innerHeight}:{width:0,height:0}}static \u0275fac=function(i){return new(i||n)};static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var ue=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=k({type:n});static \u0275inj=x({})}return n})(),Be=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=k({type:n});static \u0275inj=x({imports:[M,ue,M,ue]})}return n})();var $=class{_attachedHost=null;attach(e){return this._attachedHost=e,e.attach(this)}detach(){let e=this._attachedHost;e!=null&&(this._attachedHost=null,e.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(e){this._attachedHost=e}},Ne=class extends ${component;viewContainerRef;injector;projectableNodes;bindings;constructor(e,t,i,o,r){super(),this.component=e,this.viewContainerRef=t,this.injector=i,this.projectableNodes=o,this.bindings=r||null}},me=class extends ${templateRef;viewContainerRef;context;injector;constructor(e,t,i,o){super(),this.templateRef=e,this.viewContainerRef=t,this.context=i,this.injector=o}get origin(){return this.templateRef.elementRef}attach(e,t=this.context){return this.context=t,super.attach(e)}detach(){return this.context=void 0,super.detach()}},Le=class extends ${element;constructor(e){super(),this.element=e instanceof B?e.nativeElement:e}},ze=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(e){if(e instanceof Ne)return this._attachedPortal=e,this.attachComponentPortal(e);if(e instanceof me)return this._attachedPortal=e,this.attachTemplatePortal(e);if(this.attachDomPortal&&e instanceof Le)return this._attachedPortal=e,this.attachDomPortal(e)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(e){this._disposeFn=e}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},fe=class extends ze{outletElement;_appRef;_defaultInjector;constructor(e,t,i){super(),this.outletElement=e,this._appRef=t,this._defaultInjector=i}attachComponentPortal(e){let t;if(e.viewContainerRef){let i=e.injector||e.viewContainerRef.injector,o=i.get(tt,null,{optional:!0})||void 0;t=e.viewContainerRef.createComponent(e.component,{index:e.viewContainerRef.length,injector:i,ngModuleRef:o,projectableNodes:e.projectableNodes||void 0,bindings:e.bindings||void 0}),this.setDisposeFn(()=>t.destroy())}else{let i=this._appRef,o=e.injector||this._defaultInjector||N.NULL,r=o.get(ie,i.injector);t=ot(e.component,{elementInjector:o,environmentInjector:r,projectableNodes:e.projectableNodes||void 0,bindings:e.bindings||void 0}),i.attachView(t.hostView),this.setDisposeFn(()=>{i.viewCount>0&&i.detachView(t.hostView),t.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(t)),this._attachedPortal=e,t}attachTemplatePortal(e){let t=e.viewContainerRef,i=t.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return i.rootNodes.forEach(o=>this.outletElement.appendChild(o)),i.detectChanges(),this.setDisposeFn(()=>{let o=t.indexOf(i);o!==-1&&t.remove(o)}),this._attachedPortal=e,i}attachDomPortal=e=>{let t=e.element;t.parentNode;let i=this.outletElement.ownerDocument.createComment("dom-portal");t.parentNode.insertBefore(i,t),this.outletElement.appendChild(t),this._attachedPortal=e,super.setDisposeFn(()=>{i.parentNode&&i.parentNode.replaceChild(t,i)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(e){return e.hostView.rootNodes[0]}};var Kt=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=k({type:n});static \u0275inj=x({})}return n})();var Zt=xt();function ni(n){return new ge(n.get(G),n.get(F))}var ge=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(e,t){this._viewportRuler=e,this._document=t}attach(){}enable(){if(this._canBeEnabled()){let e=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=e.style.left||"",this._previousHTMLStyles.top=e.style.top||"",e.style.left=_(-this._previousScrollPosition.left),e.style.top=_(-this._previousScrollPosition.top),e.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let e=this._document.documentElement,t=this._document.body,i=e.style,o=t.style,r=i.scrollBehavior||"",s=o.scrollBehavior||"";this._isEnabled=!1,i.left=this._previousHTMLStyles.left,i.top=this._previousHTMLStyles.top,e.classList.remove("cdk-global-scrollblock"),Zt&&(i.scrollBehavior=o.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),Zt&&(i.scrollBehavior=r,o.scrollBehavior=s)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let t=this._document.documentElement,i=this._viewportRuler.getViewportSize();return t.scrollHeight>i.height||t.scrollWidth>i.width}};function oi(n,e){return new _e(n.get(Ve),n.get(T),n.get(G),e)}var _e=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(e,t,i,o){this._scrollDispatcher=e,this._ngZone=t,this._viewportRuler=i,this._config=o}attach(e){this._overlayRef,this._overlayRef=e}enable(){if(this._scrollSubscription)return;let e=this._scrollDispatcher.scrolled(0).pipe(te(t=>!t||!this._overlayRef.overlayElement.contains(t.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=e.subscribe(()=>{let t=this._viewportRuler.getViewportScrollPosition().top;Math.abs(t-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=e.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var Q=class{enable(){}disable(){}attach(){}};function We(n,e){return e.some(t=>{let i=n.bottom<t.top,o=n.top>t.bottom,r=n.right<t.left,s=n.left>t.right;return i||o||r||s})}function $t(n,e){return e.some(t=>{let i=n.top<t.top,o=n.bottom>t.bottom,r=n.left<t.left,s=n.right>t.right;return i||o||r||s})}function He(n,e){return new ve(n.get(Ve),n.get(G),n.get(T),e)}var ve=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(e,t,i,o){this._scrollDispatcher=e,this._viewportRuler=t,this._ngZone=i,this._config=o}attach(e){this._overlayRef,this._overlayRef=e}enable(){if(!this._scrollSubscription){let e=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(e).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let t=this._overlayRef.overlayElement.getBoundingClientRect(),{width:i,height:o}=this._viewportRuler.getViewportSize();We(t,[{width:i,height:o,bottom:o,right:i,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},ri=(()=>{class n{_injector=u(N);constructor(){}noop=()=>new Q;close=t=>oi(this._injector,t);block=()=>ni(this._injector);reposition=t=>He(this._injector,t);static \u0275fac=function(i){return new(i||n)};static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),ye=class{positionStrategy;scrollStrategy=new Q;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(e){if(e){let t=Object.keys(e);for(let i of t)e[i]!==void 0&&(this[i]=e[i])}}};var be=class{connectionPair;scrollableViewProperties;constructor(e,t){this.connectionPair=e,this.scrollableViewProperties=t}};var si=(()=>{class n{_attachedOverlays=[];_document=u(F);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(t){this.remove(t),this._attachedOverlays.push(t)}remove(t){let i=this._attachedOverlays.indexOf(t);i>-1&&this._attachedOverlays.splice(i,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(t,i,o){return o.observers.length<1?!1:t.eventPredicate?t.eventPredicate(i):!0}static \u0275fac=function(i){return new(i||n)};static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),ai=(()=>{class n extends si{_ngZone=u(T);_renderer=u(L).createRenderer(null,null);_cleanupKeydown;add(t){super.add(t),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=t=>{let i=this._attachedOverlays;for(let o=i.length-1;o>-1;o--){let r=i[o];if(this.canReceiveEvent(r,t,r._keydownEvents)){this._ngZone.run(()=>r._keydownEvents.next(t));break}}};static \u0275fac=(()=>{let t;return function(o){return(t||(t=Re(n)))(o||n)}})();static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),li=(()=>{class n extends si{_platform=u(W);_ngZone=u(T);_renderer=u(L).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(t){if(super.add(t),!this._isAttached){let i=this._document.body,o={capture:!0},r=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[r.listen(i,"pointerdown",this._pointerDownListener,o),r.listen(i,"click",this._clickListener,o),r.listen(i,"auxclick",this._clickListener,o),r.listen(i,"contextmenu",this._clickListener,o)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=i.style.cursor,i.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(t=>t()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=t=>{this._pointerDownEventTarget=De(t)};_clickListener=t=>{let i=De(t),o=t.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:i;this._pointerDownEventTarget=null;let r=this._attachedOverlays.slice();for(let s=r.length-1;s>-1;s--){let a=r[s],d=a._outsidePointerEvents;if(!(!a.hasAttached()||!this.canReceiveEvent(a,t,d))){if(Qt(a.overlayElement,i)||Qt(a.overlayElement,o))break;this._ngZone?this._ngZone.run(()=>d.next(t)):d.next(t)}}};static \u0275fac=(()=>{let t;return function(o){return(t||(t=Re(n)))(o||n)}})();static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Qt(n,e){let t=typeof ShadowRoot<"u"&&ShadowRoot,i=e;for(;i;){if(i===n)return!0;i=t&&i instanceof ShadowRoot?i.host:i.parentNode}return!1}var ci=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=D({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(i,o){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2,changeDetection:0})}return n})(),di=(()=>{class n{_platform=u(W);_containerElement;_document=u(F);_styleLoader=u(Z);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let t="cdk-overlay-container";if(this._platform.isBrowser||Fe()){let o=this._document.querySelectorAll(`.${t}[platform="server"], .${t}[platform="test"]`);for(let r=0;r<o.length;r++)o[r].remove()}let i=this._document.createElement("div");i.classList.add(t),Fe()?i.setAttribute("platform","test"):this._platform.isBrowser||i.setAttribute("platform","server"),this._document.body.appendChild(i),this._containerElement=i}_loadStyles(){this._styleLoader.load(ci)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),je=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(e,t,i,o){this._renderer=t,this._ngZone=i,this.element=e.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=t.listen(this.element,"click",o)}detach(){this._ngZone.runOutsideAngular(()=>{let e=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(e,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),e.style.pointerEvents="none",e.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function Ye(n){return n&&n.nodeType===1}var we=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new O;_attachments=new O;_detachments=new O;_positionStrategy;_scrollStrategy;_locationChanges=ee.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new O;_outsidePointerEvents=new O;_afterNextRenderRef;constructor(e,t,i,o,r,s,a,d,f,l=!1,g,b){this._portalOutlet=e,this._host=t,this._pane=i,this._config=o,this._ngZone=r,this._keyboardDispatcher=s,this._document=a,this._location=d,this._outsideClickDispatcher=f,this._animationsDisabled=l,this._injector=g,this._renderer=b,o.scrollStrategy&&(this._scrollStrategy=o.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=o.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(e){if(this._disposed)return null;this._attachHost();let t=this._portalOutlet.attach(e);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=oe(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof t?.onDestroy=="function"&&t.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),t}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let e=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),e}dispose(){if(this._disposed)return;let e=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,e&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(e){e!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=e,this.hasAttached()&&(e.attach(this),this.updatePosition()))}updateSize(e){this._config=J(J({},this._config),e),this._updateElementSize()}setDirection(e){this._config=Ze(J({},this._config),{direction:e}),this._updateElementDirection()}addPanelClass(e){this._pane&&this._toggleClasses(this._pane,e,!0)}removePanelClass(e){this._pane&&this._toggleClasses(this._pane,e,!1)}getDirection(){let e=this._config.direction;return e?typeof e=="string"?e:e.value:"ltr"}updateScrollStrategy(e){e!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=e,this.hasAttached()&&(e.attach(this),e.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let e=this._pane.style;e.width=_(this._config.width),e.height=_(this._config.height),e.minWidth=_(this._config.minWidth),e.minHeight=_(this._config.minHeight),e.maxWidth=_(this._config.maxWidth),e.maxHeight=_(this._config.maxHeight)}_togglePointerEvents(e){this._pane.style.pointerEvents=e?"":"none"}_attachHost(){if(!this._host.parentElement){let e=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;Ye(e)?e.after(this._host):e?.type==="parent"?e.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let e="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new je(this._document,this._renderer,this._ngZone,t=>{this._backdropClick.next(t)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(e))}):this._backdropRef.element.classList.add(e)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(e,t,i){let o=Ie(t||[]).filter(r=>!!r);o.length&&(i?e.classList.add(...o):e.classList.remove(...o))}_detachContentWhenEmpty(){let e=!1;try{this._detachContentAfterRenderRef=oe(()=>{e=!0,this._detachContent()},{injector:this._injector})}catch(t){if(e)throw t;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let e=this._scrollStrategy;e?.disable(),e?.detach?.()}},Jt="cdk-overlay-connected-position-bounding-box",Ri=/([A-Za-z%]+)$/;function hi(n,e){return new Ce(e,n.get(G),n.get(F),n.get(W),n.get(di))}var Ce=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new O;_resizeSubscription=ee.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(e,t,i,o,r){this._viewportRuler=t,this._document=i,this._platform=o,this._overlayContainer=r,this.setOrigin(e)}attach(e){this._overlayRef&&this._overlayRef,this._validatePositions(),e.hostElement.classList.add(Jt),this._overlayRef=e,this._boundingBox=e.hostElement,this._pane=e.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let e=this._originRect,t=this._overlayRect,i=this._viewportRect,o=this._containerRect,r=[],s;for(let a of this._preferredPositions){let d=this._getOriginPoint(e,o,a),f=this._getOverlayPoint(d,t,a),l=this._getOverlayFit(f,t,i,a);if(l.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(a,d);return}if(this._canFitWithFlexibleDimensions(l,f,i)){r.push({position:a,origin:d,overlayRect:t,boundingBoxRect:this._calculateBoundingBoxRect(d,a)});continue}(!s||s.overlayFit.visibleArea<l.visibleArea)&&(s={overlayFit:l,overlayPoint:f,originPoint:d,position:a,overlayRect:t})}if(r.length){let a=null,d=-1;for(let f of r){let l=f.boundingBoxRect.width*f.boundingBoxRect.height*(f.position.weight||1);l>d&&(d=l,a=f)}this._isPushed=!1,this._applyPosition(a.position,a.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(s.position,s.originPoint);return}this._applyPosition(s.position,s.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&j(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(Jt),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let e=this._lastPosition;e?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(e,this._getOriginPoint(this._originRect,this._containerRect,e))):this.apply()}withScrollableContainers(e){return this._scrollables=e,this}withPositions(e){return this._preferredPositions=e,e.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(e){return this._viewportMargin=e,this}withFlexibleDimensions(e=!0){return this._hasFlexibleDimensions=e,this}withGrowAfterOpen(e=!0){return this._growAfterOpen=e,this}withPush(e=!0){return this._canPush=e,this}withLockedPosition(e=!0){return this._positionLocked=e,this}setOrigin(e){return this._origin=e,this}withDefaultOffsetX(e){return this._offsetX=e,this}withDefaultOffsetY(e){return this._offsetY=e,this}withTransformOriginOn(e){return this._transformOriginSelector=e,this}withPopoverLocation(e){return this._popoverLocation=e,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof B?this._origin.nativeElement:Ye(this._origin)?this._origin:null}_getOriginPoint(e,t,i){let o;if(i.originX=="center")o=e.left+e.width/2;else{let s=this._isRtl()?e.right:e.left,a=this._isRtl()?e.left:e.right;o=i.originX=="start"?s:a}t.left<0&&(o-=t.left);let r;return i.originY=="center"?r=e.top+e.height/2:r=i.originY=="top"?e.top:e.bottom,t.top<0&&(r-=t.top),{x:o,y:r}}_getOverlayPoint(e,t,i){let o;i.overlayX=="center"?o=-t.width/2:i.overlayX==="start"?o=this._isRtl()?-t.width:0:o=this._isRtl()?0:-t.width;let r;return i.overlayY=="center"?r=-t.height/2:r=i.overlayY=="top"?0:-t.height,{x:e.x+o,y:e.y+r}}_getOverlayFit(e,t,i,o){let r=ti(t),{x:s,y:a}=e,d=this._getOffset(o,"x"),f=this._getOffset(o,"y");d&&(s+=d),f&&(a+=f);let l=0-s,g=s+r.width-i.width,b=0-a,S=a+r.height-i.height,w=this._subtractOverflows(r.width,l,g),P=this._subtractOverflows(r.height,b,S),Ke=w*P;return{visibleArea:Ke,isCompletelyWithinViewport:r.width*r.height===Ke,fitsInViewportVertically:P===r.height,fitsInViewportHorizontally:w==r.width}}_canFitWithFlexibleDimensions(e,t,i){if(this._hasFlexibleDimensions){let o=i.bottom-t.y,r=i.right-t.x,s=ei(this._overlayRef.getConfig().minHeight),a=ei(this._overlayRef.getConfig().minWidth),d=e.fitsInViewportVertically||s!=null&&s<=o,f=e.fitsInViewportHorizontally||a!=null&&a<=r;return d&&f}return!1}_pushOverlayOnScreen(e,t,i){if(this._previousPushAmount&&this._positionLocked)return{x:e.x+this._previousPushAmount.x,y:e.y+this._previousPushAmount.y};let o=ti(t),r=this._viewportRect,s=Math.max(e.x+o.width-r.width,0),a=Math.max(e.y+o.height-r.height,0),d=Math.max(r.top-i.top-e.y,0),f=Math.max(r.left-i.left-e.x,0),l=0,g=0;return o.width<=r.width?l=f||-s:l=e.x<this._getViewportMarginStart()?r.left-i.left-e.x:0,o.height<=r.height?g=d||-a:g=e.y<this._getViewportMarginTop()?r.top-i.top-e.y:0,this._previousPushAmount={x:l,y:g},{x:e.x+l,y:e.y+g}}_applyPosition(e,t){if(this._setTransformOrigin(e),this._setOverlayElementStyles(t,e),this._setBoundingBoxStyles(t,e),e.panelClass&&this._addPanelClasses(e.panelClass),this._positionChanges.observers.length){let i=this._getScrollVisibility();if(e!==this._lastPosition||!this._lastScrollVisibility||!Ei(this._lastScrollVisibility,i)){let o=new be(e,i);this._positionChanges.next(o)}this._lastScrollVisibility=i}this._lastPosition=e,this._isInitialRender=!1}_setTransformOrigin(e){if(!this._transformOriginSelector)return;let t=this._boundingBox.querySelectorAll(this._transformOriginSelector),i,o=e.overlayY;e.overlayX==="center"?i="center":this._isRtl()?i=e.overlayX==="start"?"right":"left":i=e.overlayX==="start"?"left":"right";for(let r=0;r<t.length;r++)t[r].style.transformOrigin=`${i} ${o}`}_calculateBoundingBoxRect(e,t){let i=this._viewportRect,o=this._isRtl(),r,s,a;if(t.overlayY==="top")s=e.y,r=i.height-s+this._getViewportMarginBottom();else if(t.overlayY==="bottom")a=i.height-e.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),r=i.height-a+this._getViewportMarginTop();else{let S=Math.min(i.bottom-e.y+i.top,e.y),w=this._lastBoundingBoxSize.height;r=S*2,s=e.y-S,r>w&&!this._isInitialRender&&!this._growAfterOpen&&(s=e.y-w/2)}let d=t.overlayX==="start"&&!o||t.overlayX==="end"&&o,f=t.overlayX==="end"&&!o||t.overlayX==="start"&&o,l,g,b;if(f)b=i.width-e.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),l=e.x-this._getViewportMarginStart();else if(d)g=e.x,l=i.right-e.x-this._getViewportMarginEnd();else{let S=Math.min(i.right-e.x+i.left,e.x),w=this._lastBoundingBoxSize.width;l=S*2,g=e.x-S,l>w&&!this._isInitialRender&&!this._growAfterOpen&&(g=e.x-w/2)}return{top:s,left:g,bottom:a,right:b,width:l,height:r}}_setBoundingBoxStyles(e,t){let i=this._calculateBoundingBoxRect(e,t);!this._isInitialRender&&!this._growAfterOpen&&(i.height=Math.min(i.height,this._lastBoundingBoxSize.height),i.width=Math.min(i.width,this._lastBoundingBoxSize.width));let o={};if(this._hasExactPosition())o.top=o.left="0",o.bottom=o.right="auto",o.maxHeight=o.maxWidth="",o.width=o.height="100%";else{let r=this._overlayRef.getConfig().maxHeight,s=this._overlayRef.getConfig().maxWidth;o.width=_(i.width),o.height=_(i.height),o.top=_(i.top)||"auto",o.bottom=_(i.bottom)||"auto",o.left=_(i.left)||"auto",o.right=_(i.right)||"auto",t.overlayX==="center"?o.alignItems="center":o.alignItems=t.overlayX==="end"?"flex-end":"flex-start",t.overlayY==="center"?o.justifyContent="center":o.justifyContent=t.overlayY==="bottom"?"flex-end":"flex-start",r&&(o.maxHeight=_(r)),s&&(o.maxWidth=_(s))}this._lastBoundingBoxSize=i,j(this._boundingBox.style,o)}_resetBoundingBoxStyles(){j(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){j(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(e,t){let i={},o=this._hasExactPosition(),r=this._hasFlexibleDimensions,s=this._overlayRef.getConfig();if(o){let l=this._viewportRuler.getViewportScrollPosition();j(i,this._getExactOverlayY(t,e,l)),j(i,this._getExactOverlayX(t,e,l))}else i.position="static";let a="",d=this._getOffset(t,"x"),f=this._getOffset(t,"y");d&&(a+=`translateX(${d}px) `),f&&(a+=`translateY(${f}px)`),i.transform=a.trim(),s.maxHeight&&(o?i.maxHeight=_(s.maxHeight):r&&(i.maxHeight="")),s.maxWidth&&(o?i.maxWidth=_(s.maxWidth):r&&(i.maxWidth="")),j(this._pane.style,i)}_getExactOverlayY(e,t,i){let o={top:"",bottom:""},r=this._getOverlayPoint(t,this._overlayRect,e);if(this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,i)),e.overlayY==="bottom"){let s=this._document.documentElement.clientHeight;o.bottom=`${s-(r.y+this._overlayRect.height)}px`}else o.top=_(r.y);return o}_getExactOverlayX(e,t,i){let o={left:"",right:""},r=this._getOverlayPoint(t,this._overlayRect,e);this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,i));let s;if(this._isRtl()?s=e.overlayX==="end"?"left":"right":s=e.overlayX==="end"?"right":"left",s==="right"){let a=this._document.documentElement.clientWidth;o.right=`${a-(r.x+this._overlayRect.width)}px`}else o.left=_(r.x);return o}_getScrollVisibility(){let e=this._getOriginRect(),t=this._pane.getBoundingClientRect(),i=this._scrollables.map(o=>o.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:$t(e,i),isOriginOutsideView:We(e,i),isOverlayClipped:$t(t,i),isOverlayOutsideView:We(t,i)}}_subtractOverflows(e,...t){return t.reduce((i,o)=>i-Math.max(o,0),e)}_getNarrowedViewportRect(){let e=this._document.documentElement.clientWidth,t=this._document.documentElement.clientHeight,i=this._viewportRuler.getViewportScrollPosition();return{top:i.top+this._getViewportMarginTop(),left:i.left+this._getViewportMarginStart(),right:i.left+e-this._getViewportMarginEnd(),bottom:i.top+t-this._getViewportMarginBottom(),width:e-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:t-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(e,t){return t==="x"?e.offsetX==null?this._offsetX:e.offsetX:e.offsetY==null?this._offsetY:e.offsetY}_validatePositions(){}_addPanelClasses(e){this._pane&&Ie(e).forEach(t=>{t!==""&&this._appliedPanelClasses.indexOf(t)===-1&&(this._appliedPanelClasses.push(t),this._pane.classList.add(t))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(e=>{this._pane.classList.remove(e)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let e=this._origin;if(e instanceof B)return e.nativeElement.getBoundingClientRect();if(e instanceof Element)return e.getBoundingClientRect();let t=e.width||0,i=e.height||0;return{top:e.y,bottom:e.y+i,left:e.x,right:e.x+t,height:i,width:t}}_getContainerRect(){let e=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",t=this._overlayContainer.getContainerElement();e&&(t.style.display="block");let i=t.getBoundingClientRect();return e&&(t.style.display=""),i}};function j(n,e){for(let t in e)e.hasOwnProperty(t)&&(n[t]=e[t]);return n}function ei(n){if(typeof n!="number"&&n!=null){let[e,t]=n.split(Ri);return!t||t==="px"?parseFloat(e):null}return n||null}function ti(n){return{top:Math.floor(n.top),right:Math.floor(n.right),bottom:Math.floor(n.bottom),left:Math.floor(n.left),width:Math.floor(n.width),height:Math.floor(n.height)}}function Ei(n,e){return n===e?!0:n.isOriginClipped===e.isOriginClipped&&n.isOriginOutsideView===e.isOriginOutsideView&&n.isOverlayClipped===e.isOverlayClipped&&n.isOverlayOutsideView===e.isOverlayOutsideView}var ii="cdk-global-overlay-wrapper";function pi(n){return new xe}var xe=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(e){let t=e.getConfig();this._overlayRef=e,this._width&&!t.width&&e.updateSize({width:this._width}),this._height&&!t.height&&e.updateSize({height:this._height}),e.hostElement.classList.add(ii),this._isDisposed=!1}top(e=""){return this._bottomOffset="",this._topOffset=e,this._alignItems="flex-start",this}left(e=""){return this._xOffset=e,this._xPosition="left",this}bottom(e=""){return this._topOffset="",this._bottomOffset=e,this._alignItems="flex-end",this}right(e=""){return this._xOffset=e,this._xPosition="right",this}start(e=""){return this._xOffset=e,this._xPosition="start",this}end(e=""){return this._xOffset=e,this._xPosition="end",this}width(e=""){return this._overlayRef?this._overlayRef.updateSize({width:e}):this._width=e,this}height(e=""){return this._overlayRef?this._overlayRef.updateSize({height:e}):this._height=e,this}centerHorizontally(e=""){return this.left(e),this._xPosition="center",this}centerVertically(e=""){return this.top(e),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let e=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement.style,i=this._overlayRef.getConfig(),{width:o,height:r,maxWidth:s,maxHeight:a}=i,d=(o==="100%"||o==="100vw")&&(!s||s==="100%"||s==="100vw"),f=(r==="100%"||r==="100vh")&&(!a||a==="100%"||a==="100vh"),l=this._xPosition,g=this._xOffset,b=this._overlayRef.getConfig().direction==="rtl",S="",w="",P="";d?P="flex-start":l==="center"?(P="center",b?w=g:S=g):b?l==="left"||l==="end"?(P="flex-end",S=g):(l==="right"||l==="start")&&(P="flex-start",w=g):l==="left"||l==="start"?(P="flex-start",S=g):(l==="right"||l==="end")&&(P="flex-end",w=g),e.position=this._cssPosition,e.marginLeft=d?"0":S,e.marginTop=f?"0":this._topOffset,e.marginBottom=this._bottomOffset,e.marginRight=d?"0":w,t.justifyContent=P,t.alignItems=f?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let e=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement,i=t.style;t.classList.remove(ii),i.justifyContent=i.alignItems=e.marginTop=e.marginBottom=e.marginLeft=e.marginRight=e.position="",this._overlayRef=null,this._isDisposed=!0}},ui=(()=>{class n{_injector=u(N);constructor(){}global(){return pi()}flexibleConnectedTo(t){return hi(this._injector,t)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Xe=new H("OVERLAY_DEFAULT_CONFIG");function mi(n,e){n.get(Z).load(ci);let t=n.get(di),i=n.get(F),o=n.get(he),r=n.get(Me),s=n.get(Te),a=n.get(Ee,null,{optional:!0})||n.get(L).createRenderer(null,null),d=new ye(e),f=n.get(Xe,null,{optional:!0})?.usePopover??!0;d.direction=d.direction||s.value,"showPopover"in i.body?d.usePopover=e?.usePopover??f:d.usePopover=!1;let l=i.createElement("div"),g=i.createElement("div");l.id=o.getId("cdk-overlay-"),l.classList.add("cdk-overlay-pane"),g.appendChild(l),d.usePopover&&(g.setAttribute("popover","manual"),g.classList.add("cdk-overlay-popover"));let b=d.usePopover?d.positionStrategy?.getPopoverInsertionPoint?.():null;return Ye(b)?b.after(g):b?.type==="parent"?b.element.appendChild(g):t.getContainerElement().appendChild(g),new we(new fe(l,r,n),g,l,d,n.get(T),n.get(ai),i,n.get(rt),n.get(li),e?.disableAnimations??n.get(Je,null,{optional:!0})==="NoopAnimations",n.get(ie),a)}var fi=(()=>{class n{scrollStrategies=u(ri);_positionBuilder=u(ui);_injector=u(N);constructor(){}create(t){return mi(this._injector,t)}position(){return this._positionBuilder}static \u0275fac=function(i){return new(i||n)};static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Ge=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=k({type:n});static \u0275inj=x({providers:[fi],imports:[M,Kt,Be,Be]})}return n})();var gi=(()=>{class n{_animationsDisabled=kt();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=D({type:n,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(i,o){i&2&&X("mat-pseudo-checkbox-indeterminate",o.state==="indeterminate")("mat-pseudo-checkbox-checked",o.state==="checked")("mat-pseudo-checkbox-disabled",o.disabled)("mat-pseudo-checkbox-minimal",o.appearance==="minimal")("mat-pseudo-checkbox-full",o.appearance==="full")("_mat-animation-noopable",o._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(i,o){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2,changeDetection:0})}return n})();var Fi=["text"],Ti=[[["mat-icon"]],"*"],Ai=["mat-icon","*"];function Vi(n,e){if(n&1&&y(0,"mat-pseudo-checkbox",1),n&2){let t=R();v("disabled",t.disabled)("state",t.selected?"checked":"unchecked")}}function Bi(n,e){if(n&1&&y(0,"mat-pseudo-checkbox",3),n&2){let t=R();v("disabled",t.disabled)}}function Ni(n,e){if(n&1&&(h(0,"span",4),p(1),c()),n&2){let t=R();m(),A("(",t.group.label,")")}}var Li=new H("MAT_OPTION_PARENT_COMPONENT"),zi=new H("MatOptgroup");var qe=class{source;isUserInput;constructor(e,t=!1){this.source=e,this.isUserInput=t}},_i=(()=>{class n{_element=u(B);_changeDetectorRef=u(Pe);_parent=u(Li,{optional:!0});group=u(zi,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=u(he).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(t){this._disabled.set(t)}_disabled=Oe(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new ne;_text;_stateChanges=new O;constructor(){let t=u(Z);t.load(Ot),t.load(wt),this._signalDisableRipple=!!this._parent&&it(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(t=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),t&&this._emitSelectionChangeEvent())}deselect(t=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),t&&this._emitSelectionChangeEvent())}focus(t,i){let o=this._getHostElement();typeof o.focus=="function"&&o.focus(i)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(t){(t.keyCode===13||t.keyCode===32)&&!Ct(t)&&(this._selectViaInteraction(),t.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let t=this.viewValue;t!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=t)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(t=!1){this.onSelectionChange.emit(new qe(this,t))}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=D({type:n,selectors:[["mat-option"]],viewQuery:function(i,o){if(i&1&&se(Fi,7),i&2){let r;ae(r=le())&&(o._text=r.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(i,o){i&1&&z("click",function(){return o._selectViaInteraction()})("keydown",function(s){return o._handleKeydown(s)}),i&2&&(nt("id",o.id),Y("aria-selected",o.selected)("aria-disabled",o.disabled.toString()),X("mdc-list-item--selected",o.selected)("mat-mdc-option-multiple",o.multiple)("mat-mdc-option-active",o.active)("mdc-list-item--disabled",o.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",de]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:Ai,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(i,o){i&1&&(re(Ti),q(0,Vi,1,2,"mat-pseudo-checkbox",1),K(1),h(2,"span",2,0),K(4,1),c(),q(5,Bi,1,1,"mat-pseudo-checkbox",3),q(6,Ni,2,1,"span",4),y(7,"div",5)),i&2&&(U(o.multiple?0:-1),m(5),U(!o.multiple&&o.selected&&!o.hideSingleSelectionIndicator?5:-1),m(),U(o.group&&o.group._inert?6:-1),m(),v("matRippleTrigger",o._getHostElement())("matRippleDisabled",o.disabled||o.disableRipple))},dependencies:[gi,St],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--mat-option-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-option-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-option-label-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return n})();var vi=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=k({type:n});static \u0275inj=x({imports:[M]})}return n})();var Ue=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=k({type:n});static \u0275inj=x({imports:[Et,vi,_i,M]})}return n})();var yi=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=k({type:n});static \u0275inj=x({imports:[Ge,Ue,M,ue,pe,Ue]})}return n})();var bi={BASEURL:"http://localhost:8080/api/v1"};var ke=class n{httpClient=u(lt);baseUrl=bi.BASEURL;authUrl=`${this.baseUrl}/auth/register`;register(e){return this.httpClient.post(this.authUrl,e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"})};function Wi(n,e){if(n&1&&(h(0,"mat-error"),p(1),c()),n&2){let t=R();m(),A(" ",t.getFirstNameError()," ")}}function ji(n,e){if(n&1&&(h(0,"mat-error"),p(1),c()),n&2){let t=R();m(),A(" ",t.getLastNameError()," ")}}function Hi(n,e){if(n&1&&(h(0,"mat-error"),p(1),c()),n&2){let t=R();m(),A(" ",t.getEmailError()," ")}}function Yi(n,e){if(n&1&&(h(0,"mat-error"),p(1),c()),n&2){let t=R();m(),A(" ",t.getPhoneError()," ")}}function Xi(n,e){if(n&1&&(h(0,"mat-error"),p(1),c()),n&2){let t=R();m(),A(" ",t.getPasswordError()," ")}}function Gi(n,e){if(n&1&&(h(0,"mat-error"),p(1),c()),n&2){let t=R();m(),A(" ",t.getConfirmPasswordError()," ")}}function qi(n,e){n&1&&(h(0,"mat-error",33),p(1," You must accept the terms to continue "),c())}function Ui(n,e){n&1&&y(0,"mat-spinner",34)}function Ki(n,e){n&1&&(h(0,"mat-icon"),p(1,"how_to_reg"),c())}function Zi(n,e){n&1&&(h(0,"span"),p(1,"Create account"),c())}function $i(n){let e=n.get("password")?.value,t=n.get("confirmPassword")?.value;return e&&t&&e!==t?{passwordMismatch:!0}:null}var wi=class n{constructor(e){this.fb=e}registerForm;hidePassword=!0;hideConfirmPassword=!0;isLoading=!1;authService=u(ke);router=u(ct);ngOnInit(){this.registerForm=this.fb.group({firstName:["",[E.required,E.minLength(2)]],lastName:["",[E.required,E.minLength(2)]],email:["",[E.required,E.email]],phoneNumber:["",[E.pattern(/^(?:\+94|0)[0-9]{9}$/)]],password:["",[E.required,E.minLength(8)]],confirmPassword:["",[E.required]],agreeTerms:[!1,[E.requiredTrue]]},{validators:$i})}togglePassword(){this.hidePassword=!this.hidePassword}toggleConfirmPassword(){this.hideConfirmPassword=!this.hideConfirmPassword}onRegister(){if(this.registerForm.invalid){this.registerForm.markAllAsTouched();return}this.isLoading=!0;let{firstName:e,lastName:t,email:i,phoneNumber:o,password:r}=this.registerForm.value,s={fullName:`${e} ${t}`,email:i,phoneNumber:o,password:r};this.authService.register(s).subscribe({next:()=>{this.isLoading=!1,this.router.navigateByUrl("/auth/login")},error:a=>{this.isLoading=!1,console.log(a)}})}getFirstNameError(){let e=this.registerForm.get("firstName");return e?.hasError("required")?"First name is required":e?.hasError("minlength")?"Must be at least 2 characters":""}getLastNameError(){let e=this.registerForm.get("lastName");return e?.hasError("required")?"Last name is required":e?.hasError("minlength")?"Must be at least 2 characters":""}getEmailError(){let e=this.registerForm.get("email");return e?.hasError("required")?"Email is required":e?.hasError("email")?"Enter a valid email address":""}getPhoneError(){let e=this.registerForm.get("phoneNumber");return e?.hasError("required")?"Phone number is required":e?.hasError("pattern")?"Enter a valid Sri Lankan number (e.g. 077 123 4567)":""}getPasswordError(){let e=this.registerForm.get("password");return e?.hasError("required")?"Password is required":e?.hasError("minlength")?"Password must be at least 8 characters":""}getConfirmPasswordError(){let e=this.registerForm.get("confirmPassword");return e?.hasError("required")?"Please confirm your password":this.registerForm.hasError("passwordMismatch")&&e?.touched?"Passwords do not match":""}static \u0275fac=function(t){return new(t||n)(et(vt))};static \u0275cmp=D({type:n,selectors:[["app-register-page"]],decls:84,vars:18,consts:[[1,"register-page"],[1,"register-main"],[1,"register-card"],[1,"card-brand"],[1,"brand-dot"],[1,"brand-label"],[1,"card-title"],[1,"card-subtitle"],["novalidate","",1,"register-form",3,"ngSubmit","formGroup"],[1,"name-row"],["appearance","outline",1,"half-width"],["matPrefix","",1,"field-prefix-icon"],["matInput","","formControlName","firstName","placeholder","Kasun","autocomplete","given-name"],[4,"ngIf"],["matInput","","formControlName","lastName","placeholder","Perera","autocomplete","family-name"],["appearance","outline",1,"full-width"],["matInput","","type","email","formControlName","email","placeholder","you@example.com","autocomplete","email"],["matInput","","type","tel","formControlName","phoneNumber","placeholder","077 123 4567","autocomplete","tel"],["matInput","","formControlName","password","placeholder","Min. 8 characters","autocomplete","new-password",3,"type"],["mat-icon-button","","matSuffix","","type","button",1,"visibility-toggle",3,"click"],["matInput","","formControlName","confirmPassword","placeholder","Re-enter your password","autocomplete","new-password",3,"type"],[1,"terms-row"],["formControlName","agreeTerms","color","primary",1,"terms-checkbox"],[1,"terms-text"],["routerLink","/terms",1,"terms-link"],["routerLink","/privacy",1,"terms-link"],["class","terms-error",4,"ngIf"],["mat-flat-button","","type","submit",1,"btn-register",3,"disabled"],["diameter","18","class","btn-spinner",4,"ngIf"],[1,"divider"],[1,"divider-line"],[1,"divider-text"],["routerLink","/auth/login","mat-stroked-button","",1,"btn-login"],[1,"terms-error"],["diameter","18",1,"btn-spinner"]],template:function(t,i){if(t&1&&(h(0,"div",0)(1,"main",1)(2,"div",2)(3,"div",3),y(4,"span",4),h(5,"span",5),p(6,"DrivePro \xB7 Sri Lanka"),c()(),h(7,"h1",6),p(8,"Create your account"),c(),h(9,"p",7),p(10,"Join thousands of happy drivers across the island."),c(),h(11,"form",8),z("ngSubmit",function(){return i.onRegister()}),h(12,"div",9)(13,"mat-form-field",10)(14,"mat-label"),p(15,"First name"),c(),h(16,"mat-icon",11),p(17,"person_outline"),c(),y(18,"input",12),I(19,Wi,2,1,"mat-error",13),c(),h(20,"mat-form-field",10)(21,"mat-label"),p(22,"Last name"),c(),y(23,"input",14),I(24,ji,2,1,"mat-error",13),c()(),h(25,"mat-form-field",15)(26,"mat-label"),p(27,"Email address"),c(),h(28,"mat-icon",11),p(29,"mail_outline"),c(),y(30,"input",16),I(31,Hi,2,1,"mat-error",13),c(),h(32,"mat-form-field",15)(33,"mat-label"),p(34,"Mobile number"),c(),h(35,"mat-icon",11),p(36,"phone_android"),c(),y(37,"input",17),h(38,"mat-hint"),p(39,"Sri Lankan number (+94 or 0xx)"),c(),I(40,Yi,2,1,"mat-error",13),c(),h(41,"mat-form-field",15)(42,"mat-label"),p(43,"Password"),c(),h(44,"mat-icon",11),p(45,"lock_outline"),c(),y(46,"input",18),h(47,"button",19),z("click",function(){return i.togglePassword()}),h(48,"mat-icon"),p(49),c()(),I(50,Xi,2,1,"mat-error",13),c(),h(51,"mat-form-field",15)(52,"mat-label"),p(53,"Confirm password"),c(),h(54,"mat-icon",11),p(55,"lock_outline"),c(),y(56,"input",20),h(57,"button",19),z("click",function(){return i.toggleConfirmPassword()}),h(58,"mat-icon"),p(59),c()(),I(60,Gi,2,1,"mat-error",13),c(),h(61,"div",21)(62,"mat-checkbox",22)(63,"span",23),p(64," I agree to the "),h(65,"a",24),p(66,"Terms of Service"),c(),p(67," and "),h(68,"a",25),p(69,"Privacy Policy"),c()()(),I(70,qi,2,0,"mat-error",26),c(),h(71,"button",27),I(72,Ui,1,0,"mat-spinner",28)(73,Ki,2,0,"mat-icon",13)(74,Zi,2,0,"span",13),c()(),h(75,"div",29),y(76,"span",30),h(77,"span",31),p(78,"Already have an account?"),c(),y(79,"span",30),c(),h(80,"a",32)(81,"mat-icon"),p(82,"login"),c(),p(83," Sign in instead "),c()()()()),t&2){let o,r,s,a,d,f,l;m(11),v("formGroup",i.registerForm),m(8),v("ngIf",(o=i.registerForm.get("firstName"))==null?null:o.touched),m(5),v("ngIf",(r=i.registerForm.get("lastName"))==null?null:r.touched),m(7),v("ngIf",(s=i.registerForm.get("email"))==null?null:s.touched),m(9),v("ngIf",(a=i.registerForm.get("phone"))==null?null:a.touched),m(6),v("type",i.hidePassword?"password":"text"),m(),Y("aria-label",i.hidePassword?"Show password":"Hide password"),m(2),ce(i.hidePassword?"visibility_off":"visibility"),m(),v("ngIf",(d=i.registerForm.get("password"))==null?null:d.touched),m(6),v("type",i.hideConfirmPassword?"password":"text"),m(),Y("aria-label",i.hideConfirmPassword?"Show password":"Hide password"),m(2),ce(i.hideConfirmPassword?"visibility_off":"visibility"),m(),v("ngIf",(f=i.registerForm.get("confirmPassword"))==null?null:f.touched),m(10),v("ngIf",((l=i.registerForm.get("agreeTerms"))==null?null:l.touched)&&((l=i.registerForm.get("agreeTerms"))==null?null:l.hasError("required"))),m(),v("disabled",i.isLoading),m(),v("ngIf",i.isLoading),m(),v("ngIf",!i.isLoading),m(),v("ngIf",!i.isLoading)}},dependencies:[at,st,yt,ft,pt,ut,mt,_t,gt,ht,dt,pe,Nt,Ft,At,Tt,Vt,Bt,jt,Wt,Pt,Mt,Rt,zt,Lt,It,Dt,Yt,Ht,yi],styles:[".register-page[_ngcontent-%COMP%]{min-height:100vh;display:flex;flex-direction:column;background:linear-gradient(145deg,#1a2a3a,#243447 60%,#1a2f3c)}.register-main[_ngcontent-%COMP%]{flex:1;display:flex;align-items:center;justify-content:center;padding:2.5rem 1rem}.register-card[_ngcontent-%COMP%]{background:#fff;border-radius:16px;padding:2.5rem 2.25rem 2rem;width:100%;max-width:480px;box-shadow:0 24px 64px #00000047}.card-brand[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem;margin-bottom:1.25rem}.brand-dot[_ngcontent-%COMP%]{width:8px;height:8px;border-radius:50%;background:#00c9a7;display:inline-block}.brand-label[_ngcontent-%COMP%]{font-size:.72rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#00c9a7}.card-title[_ngcontent-%COMP%]{font-size:1.65rem;font-weight:700;color:#1a2a3a;margin:0 0 .35rem;line-height:1.2}.card-subtitle[_ngcontent-%COMP%]{font-size:.875rem;color:#6b7c93;margin:0 0 1.75rem}.register-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.25rem}.name-row[_ngcontent-%COMP%]{display:flex;gap:.75rem}.half-width[_ngcontent-%COMP%]{flex:1;min-width:0}.full-width[_ngcontent-%COMP%]{width:100%}.field-prefix-icon[_ngcontent-%COMP%]{font-size:18px;color:#8a9bb0;margin-right:4px}  .mat-mdc-form-field.mat-focused .mdc-notched-outline__leading,   .mat-mdc-form-field.mat-focused .mdc-notched-outline__notch,   .mat-mdc-form-field.mat-focused .mdc-notched-outline__trailing{border-color:#00c9a7!important}  .mat-mdc-form-field.mat-focused .mat-mdc-floating-label{color:#00c9a7!important}  .mat-mdc-checkbox.mat-primary .mdc-checkbox__background{border-color:#00c9a7!important}  .mat-mdc-checkbox.mat-primary.mdc-checkbox--selected .mdc-checkbox__background{background-color:#00c9a7!important;border-color:#00c9a7!important}.visibility-toggle[_ngcontent-%COMP%]{color:#8a9bb0;transition:color .2s}.visibility-toggle[_ngcontent-%COMP%]:hover{color:#00c9a7}.terms-row[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.25rem;margin:.5rem 0}.terms-checkbox[_ngcontent-%COMP%]{align-items:flex-start}.terms-text[_ngcontent-%COMP%]{font-size:.82rem;color:#4a5568;line-height:1.5}.terms-link[_ngcontent-%COMP%]{color:#00c9a7;font-weight:500;text-decoration:none;transition:opacity .2s}.terms-link[_ngcontent-%COMP%]:hover{opacity:.75;text-decoration:underline}.terms-error[_ngcontent-%COMP%]{font-size:.75rem;color:#e53e3e;margin-left:.25rem}.btn-register[_ngcontent-%COMP%]{width:100%;height:48px;background-color:#00c9a7!important;color:#fff!important;font-size:.925rem;font-weight:600;letter-spacing:.03em;border-radius:8px!important;margin-top:.5rem;display:flex;align-items:center;justify-content:center;gap:.4rem;transition:background-color .2s ease,box-shadow .2s ease}.btn-register[_ngcontent-%COMP%]:hover:not([disabled]){background-color:#00b597!important;box-shadow:0 4px 16px #00c9a759}.btn-register[disabled][_ngcontent-%COMP%]{opacity:.7;cursor:not-allowed}.btn-spinner[_ngcontent-%COMP%]{--mdc-circular-progress-active-indicator-color: #ffffff}.divider[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.75rem;margin:1.5rem 0 1rem}.divider-line[_ngcontent-%COMP%]{flex:1;height:1px;background:#e4eaf0}.divider-text[_ngcontent-%COMP%]{font-size:.78rem;color:#9aabb8;white-space:nowrap}.btn-login[_ngcontent-%COMP%]{width:100%;height:46px;border-color:#00c9a7!important;color:#00c9a7!important;font-size:.9rem;font-weight:600;border-radius:8px!important;display:flex;align-items:center;justify-content:center;gap:.4rem;text-decoration:none;transition:background-color .2s ease}.btn-login[_ngcontent-%COMP%]:hover{background-color:#00c9a70f!important}@media(max-width:520px){.register-card[_ngcontent-%COMP%]{padding:2rem 1.25rem 1.5rem;border-radius:12px}.card-title[_ngcontent-%COMP%]{font-size:1.4rem}.name-row[_ngcontent-%COMP%]{flex-direction:column;gap:.25rem}}"]})};export{wi as RegisterPage};
