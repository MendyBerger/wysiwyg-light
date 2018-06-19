class WysiwygLight extends HTMLElement {

    connectedCallback () {
        this.parentElement.insertBefore(document.importNode(WysiwygLight.stylesTemplate.content, true), this);

        this.setAttribute("contenteditable", true);
        setTimeout(() => {
            if(this.children.length === 0){
                this.appendChild(WysiwygLight.div);
            }
        }, 0);
        
        document.execCommand("styleWithCSS");
        this.addEventListener("focusout", this._saveSelectionRange);
        this.addEventListener("input", () => {
            if(this.innerHTML === "<br>" || this.innerHTML === ""){ this.innerHTML = "<div></div>"}
        });
    }
    
    set value (v) {
        this.innerHTML = v;
    }
    get value () {
        return this.innerHTML;
    }

    use(tool, value){
        this._restoreSelection();
        return document.execCommand(tool, false, value);
    }

    _saveSelectionRange () {
        let sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
            var ranges = [];
            for (var i = 0, len = sel.rangeCount; i < len; ++i) {
                ranges.push(sel.getRangeAt(i));
            }
            this._savedSelection = ranges;
        }
    }

    _restoreSelection() {
        let savedSel = this._savedSelection;
        if (savedSel) {
            let sel = window.getSelection();
            sel.removeAllRanges();
            for (var i = 0, len = savedSel.length; i < len; ++i) {
                sel.addRange(savedSel[i]);
            }
        }
        this._savedSelection = undefined;
    }

}
WysiwygLight.stylesTemplate  = document.createElement("template");
WysiwygLight.stylesTemplate.innerHTML = `
    <style>
        wysiwyg-light {
            display: block;
            min-height: 20px;
        }
        wysiwyg-light > div {
            min-height: 1em;
        }
    </style>
`;
WysiwygLight.div = document.createElement("div");
customElements.define("wysiwyg-light", WysiwygLight);



class WysiwygLightTool extends HTMLElement {
    connectedCallback () {
        this.addEventListener("click", e => {
            let tool = this.getAttribute("tool");
            let value = this.getAttribute("value");
            console.log(document.execCommand(tool, false, value));
        });
        this.addEventListener("mousedown", e => e.preventDefault());
    }
}
customElements.define("wysiwyg-light-tool", WysiwygLightTool);