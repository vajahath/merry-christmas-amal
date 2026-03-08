import { LikeCounter } from "@vaju/personal-like-counter";

/**
 * Modern Christmas Gratitude Logic
 */

class ChristmasApp {
  private snowContainer: HTMLElement | null;
  private readonly SNOW_COUNT = 50;

  constructor() {
    this.snowContainer = document.getElementById('snow-container');
    this.init();
  }

  private init(): void {
    this.createSnowflakes();
    this.setupIntersectionObserver();
    this.setupLightbox();
    this.setupLikeCounter();
  }

  /**
   * Generates a flurry of snowflakes
   */
  private createSnowflakes(): void {
    if (!this.snowContainer) return;

    for (let i = 0; i < this.SNOW_COUNT; i++) {
      const snowflake = document.createElement('div');
      snowflake.className = 'snowflake';
      snowflake.innerHTML = '❄';

      const size = Math.random() * 1.5 + 0.5;
      const speed = Math.random() * 3 + 4;
      const x = Math.random() * 100;
      const opacity = Math.random() * 0.7 + 0.3;

      snowflake.style.cssText = `
            left: ${x}%;
            font-size: ${size}rem;
            animation-duration: ${speed}s;
            animation-delay: ${Math.random() * 5}s;
            opacity: ${opacity};
        `;

      this.snowContainer.appendChild(snowflake);
    }
  }

  /**
   * Animates images as they enter the viewport
   */
  private setupIntersectionObserver(): void {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const cards = document.querySelectorAll('.photo-card');
    cards.forEach(card => observer.observe(card));
  }

  /**
   * Sets up a modern lightbox experience
   */
  private setupLightbox(): void {
    const lightbox = document.getElementById('lightbox-modal');
    const lightboxImg = document.getElementById('lightbox-img') as HTMLImageElement;
    const lightboxCaption = document.getElementById('lightbox-caption');
    const photoCards = document.querySelectorAll('.photo-card');

    if (!lightbox || !lightboxImg || !lightboxCaption) return;

    photoCards.forEach(card => {
      card.addEventListener('click', () => {
        const img = card.querySelector('img');
        const caption = card.querySelector('.photo-info');

        if (img && caption) {
          lightboxImg.src = img.src;
          lightboxCaption.textContent = caption.textContent;
          lightbox.style.display = 'flex';
          document.body.style.overflow = 'hidden'; // Prevent scroll
        }
      });
    });

    const closeLightbox = () => {
      lightbox.style.display = 'none';
      document.body.style.overflow = 'auto';
    };

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox || e.target === lightboxImg) {
        closeLightbox();
      }
    });

    // Handle ESC key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeLightbox();
    });
  }

  /**
   * Setup personal like counter
   */
  private setupLikeCounter(): void {
    const counter = new LikeCounter({
      doc: "merry-christmas-amal",
    });

    const likeBtn = document.getElementById('like-btn');
    const likeCountLabel = document.getElementById('like-count');
    const syncLabel = document.getElementById('sync-status');

    if (likeBtn && likeCountLabel && syncLabel) {
      // Subscribe to counts
      counter.likes$.subscribe(count => {
        likeCountLabel.textContent = count.toString();
      });

      // Subscribe to sync status
      counter.syncing$.subscribe(isSyncing => {
        if (isSyncing) {
          syncLabel.classList.add('active');
          syncLabel.textContent = 'Saving...';
        } else {
          syncLabel.classList.remove('active');
        }
      });

      // Handle Click
      likeBtn.addEventListener('click', () => {
        counter.incrementLike();
        // Visual feedback
        likeBtn.classList.add('active');
        setTimeout(() => likeBtn.classList.remove('active'), 200);
      });
    }
  }
}

// Initialize the app when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new ChristmasApp();
});
