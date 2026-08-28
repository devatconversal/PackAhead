import styles from "./EuEmblem.module.css";

const LAYERS = [
  { src: "/brand/eu-emblem/star-0.svg", inset: "4.55% 69.15% 4.59% 1.02%" },
  { src: "/brand/eu-emblem/star-1.svg", inset: "7.05% 69.72% 7.18% 1.59%" },
  { src: "/brand/eu-emblem/star-2.svg", inset: "17.32% 83.09% 74.27% 14.94%" },
  { src: "/brand/eu-emblem/star-3.svg", inset: "21.08% 86.22% 70.49% 11.81%" },
  { src: "/brand/eu-emblem/star-4.svg", inset: "31.38% 88.51% 60.19% 9.51%" },
  { src: "/brand/eu-emblem/star-5.svg", inset: "45.41% 89.35% 46.15% 8.67%" },
  { src: "/brand/eu-emblem/star-6.svg", inset: "59.5% 88.51% 32.07% 9.51%" },
  { src: "/brand/eu-emblem/star-7.svg", inset: "69.79% 86.21% 21.77% 11.81%" },
  { src: "/brand/eu-emblem/star-8.svg", inset: "73.53% 83.09% 18.04% 14.94%" },
  { src: "/brand/eu-emblem/star-9.svg", inset: "69.79% 79.96% 21.77% 18.07%" },
  { src: "/brand/eu-emblem/star-10.svg", inset: "59.5% 77.66% 32.07% 20.36%" },
  { src: "/brand/eu-emblem/star-11.svg", inset: "45.38% 76.83% 46.19% 21.2%" },
  { src: "/brand/eu-emblem/star-12.svg", inset: "31.35% 77.66% 60.22% 20.36%" },
  { src: "/brand/eu-emblem/star-13.svg", inset: "21.08% 79.95% 70.49% 18.07%" },
];

export default function EuEmblem() {
  return (
    <div className={styles.emblem} role="img" aria-label="Co-funded by the European Union">
      {LAYERS.map((layer, i) => (
        <div key={i} className={styles.layer} style={{ inset: layer.inset }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={layer.src} alt="" className={styles.layerImg} />
        </div>
      ))}
      <p className={styles.line1}>Co-funded by</p>
      <p className={styles.line2}>the European Union</p>
    </div>
  );
}
