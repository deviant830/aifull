      // ══════════════════════════════════════════════════════════════
      // 영화 데이터베이스
      // ══════════════════════════════════════════════════════════════
      const moviesDB = {
        1: {
          title: "이터널 선샤인",
          titleEn: "Eternal Sunshine of the Spotless Mind",
          rating: "9.54",
          date: "2005.11",
          runtime: "107 min",
          genre: "로맨스 / SF",
          director: "미셸 공드리",
          country: "미국",
          rating_grade: "15세 이상",
          cast: [
            { name: "짐 캐리", role: "조엘 바리쉬" },
            { name: "케이트 윈슬렛", role: "클레멘타인" },
            { name: "커스틴 던스트", role: "메리" },
            { name: "마크 러팔로", role: "스탠" },
          ],
          tags: ["기억", "사랑", "SF", "드라마"],
          poster: "resources/eternal sunshine.jpg",
          fallback: "https://picsum.photos/seed/mv1/300/450",
          story:
            "아픈 기억만을 선택적으로 지워주는 라쿠나사 테크를 찾아간 조엘은 헤어진 연인 클레멘타인의 기억을 지우기로 결심한다. 하지만 기억이 사라져갈수록 조엘은 그녀를 지우고 싶지 않다는 사실을 깨닫고, 기억의 가장 깊은 곳으로 그녀를 숨기기 시작하는데...\n\n기억과 감정, 사랑의 의미를 탁월한 시각적 상상력으로 펼쳐낸 미셸 공드리 감독의 걸작. 찰리 카우프만의 오리지널 각본으로 2005년 아카데미 각본상을 수상했다.",
        },
        2: {
          title: "다크 나이트",
          titleEn: "The Dark Knight",
          rating: "9.54",
          date: "2008.08",
          runtime: "152 min",
          genre: "액션 / 스릴러",
          director: "크리스토퍼 놀란",
          country: "미국",
          rating_grade: "12세 이상",
          cast: [
            { name: "크리스찬 베일", role: "브루스 웨인 / 배트맨" },
            { name: "히스 레저", role: "조커" },
            { name: "아론 에크하트", role: "하비 덴트" },
            { name: "마이클 케인", role: "알프레드" },
          ],
          tags: ["슈퍼히어로", "범죄", "심리", "명작"],
          poster: "resources/the dark nkight.jpg",
          fallback: "https://picsum.photos/seed/mv2/300/450",
          story:
            "정의로운 검사 하비 덴트, 짐 고든 반장과 함께 고담시를 지키는 배트맨. 어느 날 광기 어린 악당 조커가 나타나 도시를 혼란에 빠뜨리고 배트맨에게 가혹한 선택을 강요하며 고담시 전체를 거대한 무법천지로 만들기 시작하는데...\n\n히스 레저의 전설적인 조커 연기와 놀란 감독의 연출이 빛나는 슈퍼히어로 장르의 새 지평. 히스 레저는 이 역할로 아카데미 남우조연상을 사후 수상했다.",
        },
        3: {
          title: "인셉션",
          titleEn: "Inception",
          rating: "8.5",
          date: "2010.07",
          runtime: "147 min",
          genre: "SF / 액션",
          director: "크리스토퍼 놀란",
          country: "미국",
          rating_grade: "12세 이상",
          cast: [
            { name: "레오나르도 디카프리오", role: "코브" },
            { name: "조셉 고든-레빗", role: "아서" },
            { name: "엘리엇 페이지", role: "아리아드네" },
            { name: "톰 하디", role: "이임스" },
          ],
          tags: ["꿈", "SF", "액션", "미스터리"],
          poster: "resources/inception.jpg",
          fallback: "https://picsum.photos/seed/mv3/300/450",
          story:
            "타인의 꿈에 들어가 생각을 훔치는 추출가 코브. 표적의 머릿속에 새로운 생각을 심어야 하는 주입(인셉션) 작전을 제안받는다. 생각을 훔치는 것보다 심는 것이 훨씬 위험한 설계 속에서, 팀원들과 함께 불가능에 가까운 표적의 무의식 조작에 나선다.\n\n꿈과 현실의 경계를 탐구하는 크리스토퍼 놀란의 독창적 SF 걸작. 아카데미 4개 부문(촬영, 시각효과, 음향편집, 음향혼합) 수상작.",
        },
        4: {
          title: "라라랜드",
          titleEn: "La La Land",
          rating: "8.93",
          date: "2016.12",
          runtime: "127 min",
          genre: "로맨스 / 뮤지컬",
          director: "데이미언 셔젤",
          country: "미국",
          rating_grade: "12세 이상",
          cast: [
            { name: "라이언 고슬링", role: "세바스찬" },
            { name: "엠마 스톤", role: "미아" },
          ],
          tags: ["음악", "꿈", "로맨스", "뮤지컬"],
          poster: "resources/rararand.jpg",
          fallback: "https://picsum.photos/seed/mv4/300/450",
          story:
            "꿈을 꾸는 사람들을 위한 별들의 도시 로스앤젤레스. 재즈 피아니스트 세바스찬과 배우 지망생 미아는 인생에서 가장 빛나는 순간에 만나 서로의 꿈을 응원하며 사랑에 빠진다. 그러나 현실적인 장벽 앞에 서서 점차 갈등을 겪기 시작하는데...\n\n제74회 골든글로브 7개 부문, 제89회 아카데미 6개 부문 수상. 엠마 스톤은 이 작품으로 아카데미 여우주연상을 수상했다.",
        },
        5: {
          title: "매드맥스: 분노의 도로",
          titleEn: "Mad Max: Fury Road",
          rating: "8.91",
          date: "2015.05",
          runtime: "120 min",
          genre: "액션 / 스릴러",
          director: "조지 밀러",
          country: "호주/미국",
          rating_grade: "15세 이상",
          cast: [
            { name: "톰 하디", role: "맥스 로카탄스키" },
            { name: "샤를리즈 테론", role: "임페라토르 퓨리오사" },
            { name: "니콜라스 홀트", role: "눅스" },
          ],
          tags: ["포스트아포칼립스", "액션", "SF", "페미니즘"],
          poster: "resources/매드맥스.jpg",
          fallback: "https://picsum.photos/seed/mv5/300/450",
          story:
            "핵전쟁으로 멸망한 22세기, 얼마 남지 않은 물과 기름을 차지한 독재자 임모탄 조가 살아남은 인류를 지배한다. 아내와 딸을 잃고 사막을 헤매던 맥스는 임모탄의 폭정에 반기를 든 사령관 퓨리오사와 손을 잡고 분노의 도로를 질주한다.\n\n아카데미 6개 부문 수상(편집, 미술감독, 의상, 음향편집, 음향혼합, 시각효과). 30년 만에 부활한 시리즈의 완벽한 귀환.",
        },
        6: {
          title: "기생충",
          titleEn: "Parasite",
          rating: "9.08",
          date: "2019.05",
          runtime: "131 min",
          genre: "드라마 / 스릴러",
          director: "봉준호",
          country: "한국",
          rating_grade: "15세 이상",
          cast: [
            { name: "송강호", role: "기택" },
            { name: "이선균", role: "박 사장" },
            { name: "조여정", role: "박 연교" },
            { name: "최우식", role: "기우" },
          ],
          tags: ["계층", "블랙코미디", "스릴러", "칸 황금종려상"],
          poster: "resources/기생충.jpg",
          fallback: "https://picsum.photos/seed/mv6/300/450",
          story:
            "전원 백수로 살아가며 미래가 막막한 기택네 장남 기우. 명문대생 친구의 소개로 글로벌 IT기업 CEO인 박사장네 과외 면접을 보러 가게 된다. 그렇게 시작된 두 가족의 만남은 걷잡을 수 없는 사건으로 번져나가며 파국으로 향한다.\n\n제72회 칸 영화제 황금종려상, 제92회 아카데미 작품상·감독상·각본상·국제영화상 4관왕. 한국 영화 최초 아카데미 작품상 수상작.",
        },
        7: {
          title: "어벤져스: 엔드게임",
          titleEn: "Avengers: Endgame",
          rating: "9.5",
          date: "2019.04",
          runtime: "181 min",
          genre: "액션 / SF",
          director: "앤서니·조 루소",
          country: "미국",
          rating_grade: "12세 이상",
          cast: [
            { name: "로버트 다우니 주니어", role: "토니 스타크 / 아이언맨" },
            { name: "크리스 에반스", role: "스티브 로저스 / 캡틴 아메리카" },
            { name: "스칼렛 요한슨", role: "블랙 위도우" },
          ],
          tags: ["마블", "슈퍼히어로", "SF", "대서사"],
          poster: "resources/어벤져스 엔드게임.jpg",
          fallback: "https://picsum.photos/seed/mv7/300/450",
          story:
            "인피니티 워 이후 지구의 생명체 절반이 사라진 절망적인 상황. 살아남은 어벤져스 멤버들은 흩어진 동료들을 모아 타노스가 저지른 파괴를 되돌리고 우주의 질서를 다시 회복하기 위해 마지막이 될지도 모르는 거대한 전면전을 준비한다.\n\n전 세계 박스오피스 역대 2위(27억 달러)를 기록한 마블 시네마틱 유니버스의 피날레. 22편의 영화가 하나로 수렴하는 감동적 결말.",
        },
        8: {
          title: "스파이더맨: 어크로스 더 유니버스",
          titleEn: "Spider-Man: Across the Spider-Verse",
          rating: "8.88",
          date: "2023.06",
          runtime: "140 min",
          genre: "애니메이션 / 액션",
          director: "호아킨 도스 산토스 외",
          country: "미국",
          rating_grade: "전체 관람가",
          cast: [
            { name: "샤메이크 무어", role: "마일스 모랄레스 (목소리)" },
            { name: "해일리 스타인펠드", role: "그웬 스테이시 (목소리)" },
          ],
          tags: ["애니메이션", "멀티버스", "청소년", "혁신"],
          poster: "resources/스파이더맨.jpg",
          fallback: "https://picsum.photos/seed/mv8/300/450",
          story:
            "새로운 스파이더맨 마일스 모랄레스는 그웬 스테이시와 재회하여 다중우주(멀티버스) 속으로 빨려 들어간다. 그곳에서 세계의 질서를 수호하는 정예 스파이더 팀을 만나게 되지만, 다가오는 거대한 위협 앞에 마일스는 영웅의 정의에 대해 고뇌하게 된다.\n\n혁신적인 아트 스타일과 압도적인 색채감으로 애니메이션 영화의 새 장을 연 작품. 로튼토마토 96% 신선도를 기록했다.",
        },
        9: {
          title: "듄: 파트 2",
          titleEn: "Dune: Part Two",
          rating: "8.92",
          date: "2024.02",
          runtime: "166 min",
          genre: "SF / 어드벤처",
          director: "드니 빌뇌브",
          country: "미국",
          rating_grade: "12세 이상",
          cast: [
            { name: "티모시 샬라메", role: "폴 아트레이데스" },
            { name: "젠데이아", role: "차니" },
            { name: "레베카 퍼거슨", role: "레이디 제시카" },
          ],
          tags: ["SF", "서사시", "사막", "메시아"],
          poster: "resources/듄 파트2.jpg",
          fallback: "https://picsum.photos/seed/mv9/300/450",
          story:
            "가문의 멸망 이후 사막 행성 아라키스에서 전사로 거듭난 폴 아트레이데스. 자신의 가문을 파괴한 음모자들을 향한 복수의 여정에서, 그는 사랑하는 이와 우주의 운명 사이에서 선택을 내려야만 하는 메시아로서의 무게감을 짊어지게 된다.\n\n드니 빌뇌브 감독의 압도적인 스케일과 연출력이 돋보이는 SF 서사시의 완성. 한스 짐머의 음악과 그레이그 프레이저의 촬영이 환상적 시너지를 이뤄낸다.",
        },
        10: {
          title: "에브리씽 에브리웨어 올 앳 원스",
          titleEn: "Everything Everywhere All at Once",
          rating: "4.6",
          date: "2022.12",
          runtime: "139 min",
          genre: "액션 / 코미디",
          director: "다니엘 콴 & 다니엘 쉐이너트",
          country: "미국",
          rating_grade: "15세 이상",
          cast: [
            { name: "양자경", role: "에블린 왕" },
            { name: "제이미 리 커티스", role: "디어드레" },
            { name: "키 호이 콴", role: "웨이먼드 왕" },
          ],
          tags: ["멀티버스", "가족", "코미디", "아카데미"],
          poster: "resources/evrything.jpg",
          fallback: "https://picsum.photos/seed/mv10/300/450",
          story:
            "미국에서 힘겹게 세탁소를 운영하던 에블린은 세무당국의 조사로 골머리를 앓던 중, 자신이 다중우주 속 수많은 다른 버전의 에블린들과 연결되어 있음을 알게 된다. 우주 전체를 파괴하려는 거대한 악에 맞서 가정을 지키고 세상을 구하기 위한 혼란스러운 여정이 시작된다.\n\n제95회 아카데미 작품상·감독상·여우주연상·남우조연상·여우조연상·각본상 6관왕. 양자경은 아시아 여배우 최초로 아카데미 여우주연상을 수상했다.",
        },
      };

      document.addEventListener("DOMContentLoaded", () => {
        // [핵심] 가입 상태를 로컬스토리지에서 확인
        const isPremium = localStorage.getItem("isPremium") === "true";

        const params = new URLSearchParams(window.location.search);
        const movieId = params.get("id");
        const movie = movieId ? moviesDB[movieId] : null;

        if (!movie) {
          document.getElementById("titleMain").textContent =
            "영화 정보를 찾을 수 없습니다.";
          document.getElementById("movieStory").textContent =
            "올바른 경로로 접근해 주세요. 메인 페이지로 돌아가 영화를 선택하세요.";
          return;
        }

        document.title = `${movie.title} - AIFullCine`;

        const hero = document.getElementById("movieHero");
        const safePoster = encodeURI(movie.poster);
        hero.style.backgroundImage = `linear-gradient(to bottom, rgba(15,23,42,0.35), var(--bg-midnight)), url('${safePoster}')`;

        const posterImg = document.getElementById("posterImg");
        posterImg.src = movie.poster;
        posterImg.onerror = () => (posterImg.src = movie.fallback);
        posterImg.alt = `${movie.title} 포스터`;

        const tagList = document.getElementById("tagList");
        movie.tags.forEach((t) => {
          const span = document.createElement("span");
          span.className = "tag";
          span.textContent = `#${t}`;
          tagList.appendChild(span);
        });

        document.getElementById("titleMain").textContent = movie.title;
        document.getElementById("titleEn").textContent = movie.titleEn;

        const subMeta = document.getElementById("subMeta");
        subMeta.innerHTML = `<span class="rating-large">★ ${movie.rating}</span><span class="badge">${movie.genre}</span><span class="badge">${movie.rating_grade}</span>`;

        document.getElementById("infoCards").innerHTML = `
        <div class="info-card"><div class="info-card-label">개봉</div><div class="info-card-value">${movie.date}</div></div>
        <div class="info-card"><div class="info-card-label">러닝타임</div><div class="info-card-value">${movie.runtime}</div></div>
        <div class="info-card"><div class="info-card-label">감독</div><div class="info-card-value">${movie.director}</div></div>
        <div class="info-card"><div class="info-card-label">국가</div><div class="info-card-value">${movie.country}</div></div>
      `;

        document.getElementById("movieStory").innerHTML = movie.story
          .split("\n\n")
          .map((p) => `<p style="margin-bottom:0.8rem">${p}</p>`)
          .join("");

        if (movie.cast && movie.cast.length) {
          document.getElementById("castHeading").style.display = "";
          document.getElementById("castList").innerHTML = movie.cast
            .map(
              (c) =>
                `<div class="cast-chip"><strong>${c.name}</strong> · ${c.role}</div>`,
            )
            .join("");
        }

        // ── 멤버십 버튼 & AI 배지 우회 로직 ──
        const detailMembershipBtn = document.getElementById(
          "detailMembershipBtn",
        );
        if (detailMembershipBtn) {
          if (isPremium) {
            detailMembershipBtn.href = "#";
            detailMembershipBtn.innerHTML = "✨ 프리미엄 회원";
            detailMembershipBtn.style.color = "#10B981";
            detailMembershipBtn.style.borderColor = "#10B981";
            detailMembershipBtn.addEventListener("click", (e) => {
              e.preventDefault();
              alert("이미 프리미엄 멤버십에 가입된 회원입니다.");
            });
          } else {
            detailMembershipBtn.onclick = function () {
              location.href =
                "payment.html?redirect=" +
                encodeURIComponent(window.location.href);
              return false;
            };
          }
        }

        const aiBadge = document.getElementById("aiBadge");
        const paywallModal = document.getElementById("paywallModal");

        aiBadge.addEventListener("click", () => {
          if (isPremium) {
            // 회원이면 모의 AI 평점 결과를 바로 띄워줍니다!
            alert(
              "👑 프리미엄 AI 분석 리포트\n\n이 영화는 전 세계 평론가들의 극찬을 받은 압도적인 연출과 스토리텔링이 돋보입니다. 당신의 기존 관람 성향과 대조해 보았을 때, 예상 만족도는 98%에 달합니다.",
            );
          } else {
            // 비회원이면 기존처럼 페이월 모달을 띄웁니다.
            paywallModal.classList.add("active");
          }
        });

        // 페이월 모달 내부 기능 연동
        const closePaywallBtn = document.getElementById("closePaywallBtn");
        if (closePaywallBtn) {
          closePaywallBtn.addEventListener("click", () => {
            paywallModal.classList.remove("active");
          });
        }
        paywallModal.addEventListener("click", function (e) {
          if (e.target === this) this.classList.remove("active");
        });
        const goPaymentFromDetailBtn = document.getElementById(
          "goPaymentFromDetailBtn",
        );
        if (goPaymentFromDetailBtn) {
          goPaymentFromDetailBtn.addEventListener("click", () => {
            location.href =
              "payment.html?redirect=" +
              encodeURIComponent(window.location.href);
          });
        }

        // ── 별점 선택 ──
        const stars = document.querySelectorAll(".star-btn");
        const starLabel = document.getElementById("starLabel");
        const labels = [
          "",
          "별로예요",
          "아쉬워요",
          "볼만해요",
          "추천해요",
          "인생 명작!",
        ];
        let selectedStar = 0;

        stars.forEach((btn) => {
          btn.addEventListener("mouseenter", () => {
            const val = +btn.dataset.val;
            stars.forEach(
              (s) =>
                (s.style.color = +s.dataset.val <= val ? "#fbbf24" : "#334155"),
            );
            starLabel.textContent = labels[val];
          });
          btn.addEventListener("mouseleave", () => {
            stars.forEach(
              (s) =>
                (s.style.color =
                  +s.dataset.val <= selectedStar ? "#fbbf24" : "#334155"),
            );
            starLabel.textContent = selectedStar
              ? labels[selectedStar]
              : "평점을 선택하세요";
          });
          btn.addEventListener("click", () => {
            selectedStar = +btn.dataset.val;
            stars.forEach((s) =>
              s.classList.toggle("active", +s.dataset.val <= selectedStar),
            );
            starLabel.textContent = `★ ${selectedStar}.0 — ${labels[selectedStar]}`;
          });
        });

        document
          .getElementById("commentSubmit")
          .addEventListener("click", () => {
            const text = document.getElementById("commentInput").value.trim();
            if (!text) {
              alert("코멘트를 입력해 주세요.");
              return;
            }
            if (!selectedStar) {
              alert("별점을 선택해 주세요.");
              return;
            }
            alert(
              `평점 ★${selectedStar}.0 코멘트가 등록되었습니다!\n(실제 저장 기능은 백엔드 연동 후 활성화됩니다)`,
            );
            document.getElementById("commentInput").value = "";
            selectedStar = 0;
            stars.forEach((s) => {
              s.classList.remove("active");
              s.style.color = "";
            });
            starLabel.textContent = "평점을 선택하세요";
          });

        const currentGenres = movie.genre.split(" / ");

        const related = Object.entries(moviesDB)
          .map(([key, m]) => ({ id: key, ...m }))
          .filter((m) => m.title !== movie.title)
          .filter((m) => {
            const mg = m.genre.split(" / ");
            return currentGenres.some((g) => mg.includes(g));
          })
          .slice(0, 5);

        const relatedGrid = document.getElementById("relatedGrid");

        if (related.length) {
          relatedGrid.innerHTML = related
            .map(
              (m) => `
          <a href="movie_detail.html?id=${m.id}" class="related-card" style="display: block;">
            <img src="${m.poster}" onerror="this.src='${m.fallback}'" alt="${m.title}" />
            <div class="related-card-info">
              <div class="related-card-title">${m.title}</div>
              <div class="related-card-rating">★ ${m.rating}</div>
            </div>
          </a>`,
            )
            .join("");
        } else {
          relatedGrid.innerHTML = `<p style="color:var(--text-muted)">관련 영화가 없습니다.</p>`;
        }

        // ── 헤더 검색 기능 ──
        function goSearch(q) {
          if (q.trim())
            location.href = `CINEMA_search.html?q=${encodeURIComponent(q.trim())}`;
        }
        document
          .getElementById("headerSearch")
          .addEventListener("keydown", (e) => {
            if (e.key === "Enter") goSearch(e.target.value);
          });
        document
          .getElementById("headerSearchBtn")
          .addEventListener("click", () =>
            goSearch(document.getElementById("headerSearch").value),
          );
      });
