document.addEventListener('DOMContentLoaded', () => {
    const homeLink = document.getElementById('home-link');
    const homeImg = document.getElementById('home-img');
    
    homeLink.addEventListener('mouseover', () => {
        homeImg.style.opacity = '0';
        homeLink.innerHTML = 'HOME';
    });

    homeLink.addEventListener('mouseout', () => {
        homeImg.style.opacity = '1';
        homeLink.innerHTML = '<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxcmVtIiBoZWlnaHQ9IjFyZW0iIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0id2hpdGUiIGQ9Im0xMi43MDcgMi4yOTNsOSA5Yy42My42My4xODQgMS43MDctLjcwNyAxLjcwN2gtMXY2YTMgMyAwIDAgMS0zIDNoLTF2LTdhMyAzIDAgMCAwLTIuODI0LTIuOTk1TDEzIDEyaC0yYTMgMyAwIDAgMC0zIDN2N0g3YTMgMyAwIDAgMS0zLTN2LTZIM2MtLjg5IDAtMS4zMzctMS4wNzctLjcwNy0xLjcwN2w5LTlhMSAxIDAgMCAxIDEuNDE0IDBNMTMgMTRhMSAxIDAgMCAxIDEgMXY3aC00di03YTEgMSAwIDAgMSAuODgzLS45OTNMMTEgMTR6Ii8+PC9zdmc+" alt="Home" id="home-img">';
    });
});
