export default function SceneImage({
  src,
  alt,
  className = '',
  imageClassName = '',
  loading = 'lazy',
  fetchPriority,
}) {
  return (
    <figure className={`scene-image overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding="async"
        fetchPriority={fetchPriority}
        className={`h-full w-full object-cover transition-transform duration-[1400ms] ease-out hover:scale-[1.035] ${imageClassName}`}
      />
    </figure>
  )
}
