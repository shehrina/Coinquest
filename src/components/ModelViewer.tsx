import '@google/model-viewer'

// Type declaration for model-viewer web component
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          src?: string
          alt?: string
          ar?: boolean
          'ar-modes'?: string
          'camera-controls'?: boolean
          'touch-action'?: string
          'shadow-intensity'?: string
          'auto-rotate'?: boolean
          poster?: string
          loading?: 'auto' | 'lazy' | 'eager'
          reveal?: 'auto' | 'manual'
          'environment-image'?: string
          exposure?: string
          style?: React.CSSProperties
        },
        HTMLElement
      >
    }
  }
}

interface ModelViewerProps {
  src: string
  alt?: string
  ar?: boolean
  className?: string
  style?: React.CSSProperties
}

export function ModelViewer({ 
  src, 
  alt = '3D Model', 
  ar = true,
  className = '',
  style = {}
}: ModelViewerProps) {
  return (
    <model-viewer
      src={src}
      alt={alt}
      ar={ar}
      ar-modes="webxr scene-viewer quick-look"
      camera-controls
      touch-action="pan-y"
      shadow-intensity="1"
      auto-rotate
      style={{
        width: '100%',
        height: '100%',
        ...style
      }}
      className={className}
    />
  )
}
