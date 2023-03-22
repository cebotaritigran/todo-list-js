(()=>{"use strict";function e(e,t,n){const o=new class{constructor(e,t,n){this.title=e,this.description=t,this.date=n}}(e,t,n);return o}let t=[];let n=[],o=[];function l(t){document.querySelector(".form").addEventListener("submit",(n=>{!function(t,n){const l=document.querySelector("#title").value,c=document.querySelector("#description").value,d=document.querySelector("#date").value;let r;o[n].push(e(l,c,d)),r=o[n];const i=document.createTextNode(r[r.length-1].title),u=document.createTextNode(r[r.length-1].description),s=document.createTextNode(r[r.length-1].date),a=document.createElement("p"),p=document.createElement("p"),m=document.createElement("p");a.appendChild(i),p.appendChild(u),m.appendChild(s),document.querySelector(".todos").append(a,p,m),t.preventDefault()}(n,t)}))}!function(){const n=document.querySelector(".content");document.querySelector(".todo-tab").addEventListener("click",(()=>{n.replaceChildren(),n.innerHTML+='<div class="main-todo-list">\n        <div class="form-container">\n            <form autocomplete="off" class="form">\n                <input id="title" type="text" placeholder="Title" minlength="3" maxlength="40" required>\n                <input id="description" type="text" placeholder="description" minlength="3" required>\n                <input id="date" type="date" placeholder="date" required>\n                <button class="book-add-button" type="submit">Submit</button>\n            </form>\n        </div>\n        <div class="todos"></div>';const o=document.querySelector(".todos");if(t.length>0)for(let e=0;e<t.length;e++)o.innerHTML+=`<p>${t[e].title}</p>`,o.innerHTML+=`<p>${t[e].description}</p>`,o.innerHTML+=`<p>${t[e].date}</p>`;document.querySelector(".form").addEventListener("submit",(n=>{!function(n){const o=document.querySelector("#title").value,l=document.querySelector("#description").value,c=document.querySelector("#date").value;t.push(e(o,l,c));const d=document.createTextNode(t[t.length-1].title),r=document.createTextNode(t[t.length-1].description),i=document.createTextNode(t[t.length-1].date),u=document.createElement("p"),s=document.createElement("p"),a=document.createElement("p");u.appendChild(d),s.appendChild(r),a.appendChild(i),document.querySelector(".todos").append(u,s,a),n.preventDefault()}(n)}))}))}(),document.querySelector(".project").addEventListener("submit",(e=>{!function(e){const t=document.querySelector("#project").value;n.push(function(e){const t=new class{constructor(e){this.title=e}}(e);return t}(t)),document.querySelector(".projects").innerHTML+=`<div class="project-title" value="${n.length-1}">${n[n.length-1].title}</div>`,o.push([]),function(){const e=document.querySelector(".content"),t=document.querySelectorAll(".project-title");for(let n=0;n<t.length;n++)t[n].addEventListener("click",(()=>{e.replaceChildren();let c=parseInt(t[n].getAttribute("value"));e.innerHTML+='<div class="main-todo-list">\n        <div class="form-container">\n            <form autocomplete="off" class="form">\n                <input id="title" type="text" placeholder="Title" minlength="3" maxlength="40" required>\n                <input id="description" type="text" placeholder="description" minlength="3" required>\n                <input id="date" type="date" placeholder="date" required>\n                <button class="book-add-button" type="submit">Submit</button>\n            </form>\n        </div>\n        <div class="todos"></div>';const d=document.querySelector(".todos");if(o[c].length>0)for(let e=0;e<o[c].length;e++)d.innerHTML+=`<p>${o[c][e].title}</p>`,d.innerHTML+=`<p>${o[c][e].description}</p>`,d.innerHTML+=`<p>${o[c][e].date}</p>`;l(c)}))}(),e.preventDefault()}(e)})),function(){const e=document.querySelector(".todo-tab"),t=document.querySelector(".title"),n=document.querySelector(".project-form"),o=document.querySelector(".projects"),l=document.querySelector(".hide-show");l.addEventListener("click",(()=>{"none"==e.style.display?(e.style.display="flex",t.style.display="flex",n.style.display="flex",o.style.display="flex",l.textContent="Hide"):(e.style.display="none",t.style.display="none",n.style.display="none",o.style.display="none",l.textContent="Show")}))}()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVNDLGNBQWMsaUJBQ3JDTCxFQUFXSSxTQUFTQyxjQUFjLGFBQ2xDb0MsRUFBV3JDLFNBQVNDLGNBQWMsY0FDeENvQyxFQUFTbkMsaUJBQWlCLFNBQVMsS0FDRixRQUF6QmlDLEVBQVFHLE1BQU1DLFNBQ2RKLEVBQVFHLE1BQU1DLFFBQVUsT0FDeEJsRCxFQUFNaUQsTUFBTUMsUUFBVSxPQUN0QkgsRUFBWUUsTUFBTUMsUUFBVSxPQUM1QjNDLEVBQVMwQyxNQUFNQyxRQUFVLE9BQ3pCRixFQUFTRyxZQUFjLFNBR3ZCTCxFQUFRRyxNQUFNQyxRQUFVLE9BQ3hCbEQsRUFBTWlELE1BQU1DLFFBQVUsT0FDdEJILEVBQVlFLE1BQU1DLFFBQVUsT0FDNUIzQyxFQUFTMEMsTUFBTUMsUUFBVSxPQUN6QkYsRUFBU0csWUFBYyxPQUMzQixHQUVSLENFbEhBQyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL1RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL1VJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9Ub2RvTGlzdFRhYi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL1Byb2plY3RUYWJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4cGVjdHMgdGl0bGUgZGVzY3JpcHRpb24gYW5kIGRhdGUgdGhlIHRvZG8gbXVzdCBiZSBkb25lIGFuZCBwYXNzZXMgdGhlbSBvbiBUb2RvIGNsYXNzXG5leHBvcnQgZnVuY3Rpb24gZ2V0VG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUpIHtcbiAgICAvL2NsYXNzIHJldHVybnMgbmV3IHRvZG8gb2JqZWN0XG4gICAgY2xhc3MgVG9kbyB7XG4gICAgICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSkge1xuICAgICAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlXG4gICAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cbiAgICAgICAgICAgIHRoaXMuZGF0ZSA9IGRhdGVcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCB0b2RvID0gbmV3IFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlKTtcbiAgICAvLyByZXR1cm5pbmcgbmV3IHRvZG8gb2JqZWN0XG4gICAgcmV0dXJuIHRvZG87XG59XG4iLCJpbXBvcnQgeyBnZXRQcm9qZWN0IH0gZnJvbSBcIi4vUHJvamVjdFwiO1xuaW1wb3J0IHsgZGlzcGxheVRvZG9MaXN0UHJvamVjdCB9IGZyb20gXCIuL1Byb2plY3RUYWJzXCI7XG5cbmltcG9ydCB7IGdldFRvZG8gfSBmcm9tIFwiLi9Ub2RvXCI7XG5cbi8vIGxpc3Qgb2YgdG9kb3NcbmV4cG9ydCBsZXQgbGlzdCA9IFtdO1xuZnVuY3Rpb24gYWRkVG9kbyhlKSB7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKS52YWx1ZTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpLnZhbHVlO1xuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGF0ZScpLnZhbHVlO1xuICAgIGxpc3QucHVzaChnZXRUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSkpO1xuICAgIC8vIGFkZGluZyBuZXcgdG9kbyBhdCB0aGUgZW5kIG9mIHRoZSByb3dcbiAgICBjb25zdCB0aXRsZVRvZG8gPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShsaXN0W2xpc3QubGVuZ3RoIC0gMV1bXCJ0aXRsZVwiXSk7XG4gICAgY29uc3QgZGVzY3JpcHRpb25Ub2RvID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobGlzdFtsaXN0Lmxlbmd0aCAtIDFdW1wiZGVzY3JpcHRpb25cIl0pO1xuICAgIGNvbnN0IGRhdGVUb2RvID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobGlzdFtsaXN0Lmxlbmd0aCAtIDFdW1wiZGF0ZVwiXSk7XG5cbiAgICBjb25zdCBub2RlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3Qgbm9kZURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IG5vZGVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgbm9kZVRpdGxlLmFwcGVuZENoaWxkKHRpdGxlVG9kbyk7XG4gICAgbm9kZURlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uVG9kbyk7XG4gICAgbm9kZURhdGUuYXBwZW5kQ2hpbGQoZGF0ZVRvZG8pO1xuXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9zJyk7XG4gICAgZGl2LmFwcGVuZChub2RlVGl0bGUsIG5vZGVEZXNjcmlwdGlvbiwgbm9kZURhdGUpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbn1cblxuLy8gb24gc3VibWl0IGFkZCB0b2RvIHRvIHRoZSB0b2RvcyBkaXZcbmV4cG9ydCBmdW5jdGlvbiBzdWJtaXRUb2RvKCkge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybScpO1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICAgICAgYWRkVG9kbyhlKTtcbiAgICB9KTtcbn1cblxuLy8gYWRkIHByb2plY3QgaW4gc2lkZSBiYXJcbmV4cG9ydCBsZXQgcHJvamVjdHMgPSBbXTtcbmV4cG9ydCBsZXQgdG9kb0luUHJvamVjdCA9IFtdXG5mdW5jdGlvbiBhZGRQcm9qZWN0KGUpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QnKS52YWx1ZTtcbiAgICBwcm9qZWN0cy5wdXNoKGdldFByb2plY3QocHJvamVjdCkpO1xuICAgIGNvbnN0IHByb2plY3RzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpO1xuICAgIHByb2plY3RzTGlzdC5pbm5lckhUTUwgKz0gYDxkaXYgY2xhc3M9XCJwcm9qZWN0LXRpdGxlXCIgdmFsdWU9XCIke3Byb2plY3RzLmxlbmd0aCAtIDF9XCI+JHtwcm9qZWN0c1twcm9qZWN0cy5sZW5ndGggLSAxXVtcInRpdGxlXCJdfTwvZGl2PmBcbiAgICBsZXQgdG9kb0xpc3QgPSBbXTtcbiAgICB0b2RvSW5Qcm9qZWN0LnB1c2godG9kb0xpc3QpO1xuICAgIGRpc3BsYXlUb2RvTGlzdFByb2plY3QoKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJtaXRQcm9qZWN0KCkge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdCcpO1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICAgICAgYWRkUHJvamVjdChlKTtcbiAgICB9KTtcbn1cblxuXG5cbi8vIGFkZCB0b2RvIGluc2lkZSBnaXZlbiBwcm9qZWN0IHRhYlxuXG5mdW5jdGlvbiBhZGRUb2RvSW5Qcm9qZWN0KGUsIGluZGV4KSB7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKS52YWx1ZTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpLnZhbHVlO1xuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGF0ZScpLnZhbHVlO1xuXG4gICAgdG9kb0luUHJvamVjdFtpbmRleF0ucHVzaChnZXRUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSkpO1xuXG4gICAgbGV0IHVpTGlzdDtcbiAgICB1aUxpc3QgPSB0b2RvSW5Qcm9qZWN0W2luZGV4XVxuICAgIGNvbnN0IHRpdGxlVG9kbyA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHVpTGlzdFt1aUxpc3QubGVuZ3RoIC0gMV1bXCJ0aXRsZVwiXSk7XG4gICAgY29uc3QgZGVzY3JpcHRpb25Ub2RvID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodWlMaXN0W3VpTGlzdC5sZW5ndGggLSAxXVtcImRlc2NyaXB0aW9uXCJdKTtcbiAgICBjb25zdCBkYXRlVG9kbyA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHVpTGlzdFt1aUxpc3QubGVuZ3RoIC0gMV1bXCJkYXRlXCJdKTtcblxuICAgIGNvbnN0IG5vZGVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBub2RlRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3Qgbm9kZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICBub2RlVGl0bGUuYXBwZW5kQ2hpbGQodGl0bGVUb2RvKTtcbiAgICBub2RlRGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25Ub2RvKTtcbiAgICBub2RlRGF0ZS5hcHBlbmRDaGlsZChkYXRlVG9kbyk7XG5cbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb3MnKTtcbiAgICBkaXYuYXBwZW5kKG5vZGVUaXRsZSwgbm9kZURlc2NyaXB0aW9uLCBub2RlRGF0ZSk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VibWl0UHJvamVjdFRvZG8oaW5kZXgpIHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0nKTtcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICAgIGFkZFRvZG9JblByb2plY3QoZSwgaW5kZXgpO1xuICAgIH0pO1xufVxuXG4vL2hpZGUtaG93IHNpZGUgYmFyXG5cbmV4cG9ydCBmdW5jdGlvbiBoaWRlU2hvd0J1dHRvbigpIHtcbiAgICBjb25zdCB0b2RvVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tdGFiJyk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGUnKTtcbiAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWZvcm0nKTtcbiAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpO1xuICAgIGNvbnN0IGhTQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhpZGUtc2hvdycpO1xuICAgIGhTQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAodG9kb1RhYi5zdHlsZS5kaXNwbGF5ID09IFwibm9uZVwiKSB7XG4gICAgICAgICAgICB0b2RvVGFiLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgICAgIHRpdGxlLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgICAgIHByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgICAgIHByb2plY3RzLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgICAgIGhTQnV0dG9uLnRleHRDb250ZW50ID0gXCJIaWRlXCI7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRvZG9UYWIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgdGl0bGUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgcHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgcHJvamVjdHMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgaFNCdXR0b24udGV4dENvbnRlbnQgPSBcIlNob3dcIjtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwiaW1wb3J0IHsgbGlzdCwgc3VibWl0VG9kbyB9IGZyb20gXCIuL1VJXCI7XG5cbi8vIGRpc3BsYXlzIGZvcm0gYW5kIHRvZG9zIG9uIGNsaWNrXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVRvZG9MaXN0KCkge1xuXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgLy8gdG9kbyBuYXZiYXIgdGV4dCB0aGF0IHdlIGFyZSBnb2luZyB0byBjbGlja1xuICAgIGNvbnN0IHRvZG9MaXN0VGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tdGFiJyk7XG5cbiAgICB0b2RvTGlzdFRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgLy8gcmVwbGFjZSBldmVyeSBlbGVtZW50IGluIGNvbnRlbnRcbiAgICAgICAgY29udGVudC5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgICAgICAgY29udGVudC5pbm5lckhUTUwgKz0gYDxkaXYgY2xhc3M9XCJtYWluLXRvZG8tbGlzdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxmb3JtIGF1dG9jb21wbGV0ZT1cIm9mZlwiIGNsYXNzPVwiZm9ybVwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInRpdGxlXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlRpdGxlXCIgbWlubGVuZ3RoPVwiM1wiIG1heGxlbmd0aD1cIjQwXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiZGVzY3JpcHRpb25cIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiZGVzY3JpcHRpb25cIiBtaW5sZW5ndGg9XCIzXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiZGF0ZVwiIHR5cGU9XCJkYXRlXCIgcGxhY2Vob2xkZXI9XCJkYXRlXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJvb2stYWRkLWJ1dHRvblwiIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0b2Rvc1wiPjwvZGl2PmBcbiAgICAgICAgLy8gaWYgdGhlcmUgYXJlIGFueSB0b2RvcyBhbHJlYWR5IHdlIGhhdmUgdG8gZGlzcGxheSB0aGVtXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nVG9kb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb3MnKTtcbiAgICAgICAgaWYgKGxpc3QubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgICAgICAgICBleGlzdGluZ1RvZG9zLmlubmVySFRNTCArPSBgPHA+JHtsaXN0W2ldW1widGl0bGVcIl19PC9wPmBcbiAgICAgICAgICAgICAgICBleGlzdGluZ1RvZG9zLmlubmVySFRNTCArPSBgPHA+JHtsaXN0W2ldW1wiZGVzY3JpcHRpb25cIl19PC9wPmBcbiAgICAgICAgICAgICAgICBleGlzdGluZ1RvZG9zLmlubmVySFRNTCArPSBgPHA+JHtsaXN0W2ldW1wiZGF0ZVwiXX08L3A+YFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHN1Ym1pdFRvZG8oKTtcbiAgICB9KTtcbn0iLCJpbXBvcnQgeyBkaXNwbGF5VG9kb0xpc3QgfSBmcm9tIFwiLi9Ub2RvTGlzdFRhYlwiO1xuaW1wb3J0IHsgaGlkZVNob3dCdXR0b24sIHN1Ym1pdFByb2plY3QgfSBmcm9tIFwiLi9VSVwiO1xuXG4vLyBjYWxsaW5nIGZ1bmN0aW9uIHRvIGRpc3BsYXkgdGhlIGZvcm0gYW5kIHRoZSB0b2RvIGxzaXQgb24gY2xpY2tcbmRpc3BsYXlUb2RvTGlzdCgpO1xuc3VibWl0UHJvamVjdCgpO1xuaGlkZVNob3dCdXR0b24oKTtcblxuXG5cblxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldFByb2plY3QodGl0bGUpIHtcbiAgICBjbGFzcyBQcm9qZWN0IHtcbiAgICAgICAgY29uc3RydWN0b3IodGl0bGUpIHtcbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHRpdGxlKTtcbiAgICAvL3Byb2plY3RbXCJwcm9qZWN0VG9kb0xpc3RcIl0ucHVzaCgpO1xuICAgIHJldHVybiBwcm9qZWN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXJyYXkoYXJyYXkpIHtcbiAgICBjbGFzcyBMaXN0IHtcbiAgICAgICAgY29uc3RydWN0b3IoYXJyYXkgPSBbXSkge1xuICAgICAgICAgICAgdGhpcy5hcnJheSA9IGFycmF5XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBsaXN0ID0gbmV3IExpc3QoYXJyYXkpO1xuICAgIHJldHVybiBsaXN0O1xufVxuIiwiaW1wb3J0IHsgc3VibWl0UHJvamVjdFRvZG8sIHRvZG9JblByb2plY3QgfSBmcm9tIFwiLi9VSVwiO1xuXG5cbi8vIGRpc3BsYXlzIGZvcm0gYW5kIHRvZG9zIG9uIGNsaWNrXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVRvZG9MaXN0UHJvamVjdCgpIHtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuXG4gICAgLy8gdG9kbyBuYXZiYXIgdGV4dCB0aGF0IHdlIGFyZSBnb2luZyB0byBjbGlja1xuICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtdGl0bGUnKTtcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHByb2plY3RzLmxlbmd0aDsgeCsrKSB7XG4gICAgICAgIHByb2plY3RzW3hdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgLy8gcmVwbGFjZSBldmVyeSBlbGVtZW50IGluIGNvbnRlbnRcbiAgICAgICAgICAgIGNvbnRlbnQucmVwbGFjZUNoaWxkcmVuKCk7XG4gICAgICAgICAgICBsZXQgaW5kZXggPSBwYXJzZUludChwcm9qZWN0c1t4XS5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykpO1xuICAgICAgICAgICAgY29udGVudC5pbm5lckhUTUwgKz0gYDxkaXYgY2xhc3M9XCJtYWluLXRvZG8tbGlzdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxmb3JtIGF1dG9jb21wbGV0ZT1cIm9mZlwiIGNsYXNzPVwiZm9ybVwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInRpdGxlXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlRpdGxlXCIgbWlubGVuZ3RoPVwiM1wiIG1heGxlbmd0aD1cIjQwXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiZGVzY3JpcHRpb25cIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiZGVzY3JpcHRpb25cIiBtaW5sZW5ndGg9XCIzXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiZGF0ZVwiIHR5cGU9XCJkYXRlXCIgcGxhY2Vob2xkZXI9XCJkYXRlXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJvb2stYWRkLWJ1dHRvblwiIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0b2Rvc1wiPjwvZGl2PmBcbiAgICAgICAgICAgIC8vIGlmIHRoZXJlIGFyZSBhbnkgdG9kb3MgYWxyZWFkeSB3ZSBoYXZlIHRvIGRpc3BsYXkgdGhlbVxuICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdUb2RvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvcycpO1xuXG4gICAgICAgICAgICBpZiAodG9kb0luUHJvamVjdFtpbmRleF0ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb0luUHJvamVjdFtpbmRleF0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdUb2Rvcy5pbm5lckhUTUwgKz0gYDxwPiR7dG9kb0luUHJvamVjdFtpbmRleF1baV1bXCJ0aXRsZVwiXX08L3A+YFxuICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1RvZG9zLmlubmVySFRNTCArPSBgPHA+JHt0b2RvSW5Qcm9qZWN0W2luZGV4XVtpXVtcImRlc2NyaXB0aW9uXCJdfTwvcD5gXG4gICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nVG9kb3MuaW5uZXJIVE1MICs9IGA8cD4ke3RvZG9JblByb2plY3RbaW5kZXhdW2ldW1wiZGF0ZVwiXX08L3A+YFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN1Ym1pdFByb2plY3RUb2RvKGluZGV4KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG59Il0sIm5hbWVzIjpbImdldFRvZG8iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZGF0ZSIsInRvZG8iLCJjb25zdHJ1Y3RvciIsInRoaXMiLCJsaXN0IiwicHJvamVjdHMiLCJ0b2RvSW5Qcm9qZWN0Iiwic3VibWl0UHJvamVjdFRvZG8iLCJpbmRleCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwidmFsdWUiLCJ1aUxpc3QiLCJwdXNoIiwidGl0bGVUb2RvIiwiY3JlYXRlVGV4dE5vZGUiLCJsZW5ndGgiLCJkZXNjcmlwdGlvblRvZG8iLCJkYXRlVG9kbyIsIm5vZGVUaXRsZSIsImNyZWF0ZUVsZW1lbnQiLCJub2RlRGVzY3JpcHRpb24iLCJub2RlRGF0ZSIsImFwcGVuZENoaWxkIiwiYXBwZW5kIiwicHJldmVudERlZmF1bHQiLCJhZGRUb2RvSW5Qcm9qZWN0IiwiY29udGVudCIsInJlcGxhY2VDaGlsZHJlbiIsImlubmVySFRNTCIsImV4aXN0aW5nVG9kb3MiLCJpIiwiYWRkVG9kbyIsImRpc3BsYXlUb2RvTGlzdCIsInByb2plY3QiLCJnZXRQcm9qZWN0IiwicXVlcnlTZWxlY3RvckFsbCIsIngiLCJwYXJzZUludCIsImdldEF0dHJpYnV0ZSIsImRpc3BsYXlUb2RvTGlzdFByb2plY3QiLCJhZGRQcm9qZWN0IiwidG9kb1RhYiIsInByb2plY3RGb3JtIiwiaFNCdXR0b24iLCJzdHlsZSIsImRpc3BsYXkiLCJ0ZXh0Q29udGVudCIsImhpZGVTaG93QnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==