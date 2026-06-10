   
      // ══════════════════════════════════════════════════════════════
      // 데이터베이스 선언
      // ══════════════════════════════════════════════════════════════
      const moviesDB = [
        {
          id: "1",
          title: "이터널 선샤인",
          rating: "9.54",
          date: "2005.11",
          runtime: "107 min",
          genre: "로맨스 / SF",
          poster: "resources/eternal sunshine.jpg",
          fallback: "https://picsum.photos/seed/mv1/300/450",
        },
        {
          id: "2",
          title: "다크 나이트",
          rating: "9.54",
          date: "2008.08",
          runtime: "152 min",
          genre: "액션 / 스릴러",
          poster: "resources/the dark nkight.jpg",
          fallback: "https://picsum.photos/seed/mv2/300/450",
        },
        {
          id: "3",
          title: "인셉션",
          rating: "8.5",
          date: "2010.07",
          runtime: "147 min",
          genre: "SF / 액션",
          poster: "resources/inception.jpg",
          fallback: "https://picsum.photos/seed/mv3/300/450",
        },
        {
          id: "4",
          title: "라라랜드",
          rating: "8.93",
          date: "2016.12",
          runtime: "127 min",
          genre: "로맨스 / 뮤지컬",
          poster: "resources/rararand.jpg",
          fallback: "https://picsum.photos/seed/mv4/300/450",
        },
        {
          id: "5",
          title: "매드맥스: 분노의 도로",
          rating: "8.91",
          date: "2015.05",
          runtime: "120 min",
          genre: "액션 / 스릴러",
          poster: "resources/매드맥스.jpg",
          fallback: "https://picsum.photos/seed/mv5/300/450",
        },
        {
          id: "6",
          title: "기생충",
          rating: "9.08",
          date: "2019.05",
          runtime: "131 min",
          genre: "드라마 / 스릴러",
          poster: "resources/기생충.jpg",
          fallback: "https://picsum.photos/seed/mv6/300/450",
        },
        {
          id: "7",
          title: "어벤져스: 엔드게임",
          rating: "9.5",
          date: "2019.04",
          runtime: "181 min",
          genre: "액션 / SF",
          poster: "resources/어벤져스 엔드게임.jpg",
          fallback: "https://picsum.photos/seed/mv7/300/450",
        },
        {
          id: "8",
          title: "스파이더맨: 어크로스 더 유니버스",
          rating: "8.88",
          date: "2023.06",
          runtime: "140 min",
          genre: "애니메이션 / 액션",
          poster: "resources/스파이더맨.jpg",
          fallback: "https://picsum.photos/seed/mv8/300/450",
        },
        {
          id: "9",
          title: "듄: 파트 2",
          rating: "8.92",
          date: "2024.02",
          runtime: "166 min",
          genre: "SF / 어드벤처",
          poster: "resources/듄 파트2.jpg",
          fallback: "https://picsum.photos/seed/mv9/300/450",
        },
        {
          id: "10",
          title: "에브리씽 에브리웨어 올 앳 원스",
          rating: "4.6",
          date: "2022.12",
          runtime: "139 min",
          genre: "액션 / 코미디",
          poster: "resources/evrything.jpg",
          fallback: "https://picsum.photos/seed/mv10/300/450",
        },
      ];

      document.addEventListener("DOMContentLoaded", () => {
        // [신규] 히어로 슬라이더 15초 자동 전환 로직
        const slides = document.querySelectorAll(".hero-slider .slide");
        let currentSlide = 0;
        if (slides.length > 0) {
          setInterval(() => {
            slides[currentSlide].classList.remove("active");
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add("active");
          }, 15000); // 15초(15000ms)마다 다음 이미지로 변경
        }

        const isPremium = localStorage.getItem("isPremium") === "true";

        // ── 0. 멤버십 버튼 제어 ──
        const membershipBtn = document.getElementById("membershipBtn");
        if (membershipBtn) {
          if (isPremium) {
            membershipBtn.href = "#";
            membershipBtn.innerHTML = "✨ 프리미엄 혜택 적용중";
            membershipBtn.style.color = "#10B981";
            membershipBtn.style.borderColor = "#10B981";

            membershipBtn.addEventListener("click", (e) => {
              e.preventDefault();
              alert("이미 프리미엄 멤버십에 가입된 회원입니다.");
            });
          }
        }

        // ── 1. 더보기 버튼 ──
        const viewAllBtn = document.getElementById("viewAllBtn");
        const hiddenItems = document.querySelectorAll(".hidden-item");
        let isExpanded = false;
        if (viewAllBtn) {
          viewAllBtn.addEventListener("click", () => {
            if (!isExpanded) {
              hiddenItems.forEach((item) => {
                item.style.display = "flex";
                setTimeout(() => item.classList.add("fade-in"), 10);
              });
              viewAllBtn.textContent = "접기 (6)";
              isExpanded = true;
            } else {
              hiddenItems.forEach((item) => {
                item.classList.remove("fade-in");
                setTimeout(() => (item.style.display = "none"), 300);
              });
              viewAllBtn.textContent = "모두보기 (10)";
              isExpanded = false;
            }
          });
        }

        // ── 2. 페이월 모달 & 영화 카드 제어 ──
        const modal = document.getElementById("paywallModal");
        const closeBtn = document.getElementById("modalCloseBtn");
        let targetUrl = "";

        document.querySelectorAll("#movieGrid .movie-card").forEach((card) => {
          card.addEventListener("click", (e) => {
            if (!isPremium) {
              e.preventDefault();
              targetUrl = card.getAttribute("href");
              modal.classList.add("active");
            }
          });
        });

        if (closeBtn)
          closeBtn.addEventListener("click", () => {
            modal.classList.remove("active");
          });
        modal.addEventListener("click", (e) => {
          if (e.target === modal) modal.classList.remove("active");
        });

        const goPaymentBtn = document.getElementById("goPaymentBtn");
        if (goPaymentBtn) {
          goPaymentBtn.addEventListener("click", () => {
            if (targetUrl) {
              location.href = `payment.html?redirect=${encodeURIComponent(targetUrl)}`;
            } else {
              location.href = "payment.html";
            }
          });
        }

        // ── 3. 검색 기능 ──
        const searchInput = document.getElementById("searchInput");
        const searchDropdown = document.getElementById("searchDropdown");
        const heroSection = document.getElementById("heroSection");
        const mainSection = document.getElementById("mainSection");
        const resultSection = document.getElementById("searchResultSection");
        const resultGrid = document.getElementById("searchResultGrid");
        const keywordEl = document.getElementById("searchKeyword");
        const clearBtn = document.getElementById("clearSearchBtn");

        function imgTag(m) {
          return `<img src="${m.poster}" onerror="this.src='${m.fallback}'" alt="${m.title} 포스터" />`;
        }
        function highlight(text, query) {
          if (!query) return text;
          const re = new RegExp(
            `(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`,
            "gi",
          );
          return text.replace(re, "<mark>$1</mark>");
        }

        function doSearch(query) {
          const q = query.trim();
          if (!q) {
            showMain();
            return;
          }
          const results = moviesDB.filter(
            (m) =>
              m.title.toLowerCase().includes(q.toLowerCase()) ||
              m.genre.toLowerCase().includes(q.toLowerCase()),
          );

          heroSection.style.display = "none";
          mainSection.style.display = "none";
          resultSection.classList.add("visible");
          keywordEl.textContent = q;

          if (results.length === 0) {
            resultGrid.innerHTML = `<div class="no-result-msg" style="grid-column:1/-1"><div class="emoji">🎬</div><p>"<strong>${q}</strong>" 에 해당하는 영화를 찾을 수 없습니다.</p></div>`;
          } else {
            resultGrid.innerHTML = results
              .map(
                (m) => `
            <a href="movie_detail.html?id=${m.id}" class="movie-card search-result-card">
              ${imgTag(m)}
              <div class="movie-info">
                <div class="movie-title">${highlight(m.title, q)}</div>
                <div class="movie-meta"><span>${m.date}</span><span>${m.runtime}</span></div>
                <div class="movie-meta" style="margin-bottom:0.3rem"><span>${m.genre}</span></div>
                <div class="movie-rating">★ ${m.rating}</div>
              </div>
            </a>`,
              )
              .join("");

            resultGrid.querySelectorAll(".movie-card").forEach((card) => {
              card.addEventListener("click", (e) => {
                if (!isPremium) {
                  e.preventDefault();
                  targetUrl = card.getAttribute("href");
                  modal.classList.add("active");
                }
              });
            });
          }
          searchDropdown.classList.remove("visible");
        }

        function showMain() {
          heroSection.style.display = "";
          mainSection.style.display = "";
          resultSection.classList.remove("visible");
          searchDropdown.classList.remove("visible");
          searchInput.value = "";
        }

        clearBtn.addEventListener("click", showMain);

        searchInput.addEventListener("input", () => {
          const q = searchInput.value.trim();
          if (!q) {
            searchDropdown.classList.remove("visible");
            return;
          }
          const results = moviesDB.filter(
            (m) =>
              m.title.toLowerCase().includes(q.toLowerCase()) ||
              m.genre.toLowerCase().includes(q.toLowerCase()),
          );

          if (results.length === 0) {
            searchDropdown.innerHTML = `<div class="dropdown-header"><span>검색 결과 없음</span></div><div class="dropdown-empty">일치하는 영화가 없습니다 🎬</div>`;
          } else {
            const items = results
              .slice(0, 5)
              .map(
                (m) => `
            <a href="movie_detail.html?id=${m.id}" class="dropdown-item">
              ${imgTag(m)}
              <div class="dropdown-item-info">
                <div class="dropdown-item-title">${highlight(m.title, q)}</div>
                <div class="dropdown-item-meta">${m.genre} · ${m.date}</div>
              </div>
              <div class="dropdown-item-rating">★${m.rating}</div>
            </a>`,
              )
              .join("");
            const footer =
              results.length > 5
                ? `<div class="dropdown-footer" id="dropdownViewAll">결과 ${results.length}개 전체 보기 →</div>`
                : "";
            searchDropdown.innerHTML = `<div class="dropdown-header">검색 결과 <span>${results.length}개</span></div>${items}${footer}`;

            const viewAll = document.getElementById("dropdownViewAll");
            if (viewAll) viewAll.addEventListener("click", () => doSearch(q));

            searchDropdown
              .querySelectorAll(".dropdown-item")
              .forEach((item) => {
                item.addEventListener("click", (e) => {
                  if (!isPremium) {
                    e.preventDefault();
                    targetUrl = item.getAttribute("href");
                    searchDropdown.classList.remove("visible");
                    modal.classList.add("active");
                  }
                });
              });
          }
          searchDropdown.classList.add("visible");
        });

        function triggerSearch() {
          doSearch(searchInput.value);
        }
        searchInput.addEventListener("keydown", (e) => {
          if (e.key === "Enter") triggerSearch();
        });
        document
          .getElementById("searchBtn")
          .addEventListener("click", triggerSearch);
        document.addEventListener("click", (e) => {
          if (!document.getElementById("searchBarWrap").contains(e.target))
            searchDropdown.classList.remove("visible");
        });

        const urlQ = new URLSearchParams(window.location.search).get("q");
        if (urlQ) {
          searchInput.value = urlQ;
          doSearch(urlQ);
        }
      });
    
