function uuid(){var e=(new Date).getTime();return"undefined"!=typeof performance&&"function"==typeof performance.now&&(e+=performance.now()),"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(n){var a=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"===n?a:3&a|8).toString(16)})}function on(e,n,a){e.addEventListener(n,a)}function off(e,n,a){e.removeEventListener(n,a,!1)}function hasClass(e,n){var a=!1;return e.classList.forEach(function(e){e!==n||(a=!0)}),a}function addClass(e,n){hasClass(e,n)||e.classList.add(n)}function removeClass(e,n){hasClass(e,n)&&e.classList.remove(n)}function getFileAsDataURL(e,n){var a=e.target.files[0],t=new FileReader;t.addEventListener("load",function(){n&&n({filename:a.name,dataURL:t.result})},!1),a&&t.readAsDataURL(a)}