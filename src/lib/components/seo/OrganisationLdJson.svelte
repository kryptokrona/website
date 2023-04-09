<script>
  import { serializeSchema } from '$lib/utils/helpers'

  const seoData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `https://kryptokrona.org/#organization`,
    'url': 'https://kryptokrona.org',
    'name': 'Kryptokrona',
    'logo': `https://kryptokrona.org/logoicon.png`,
    'description':
      'A Nordic Cryptocurrency to secure and simplify our future economic system. Sending and receiving money should not be expensive or slow. We work with open source code that allows you to be involved and improve the communication and money of the future.',
    'sameAs': [
      'https://twitter.com/kryptokrona',
      'https://t.me/xkrofficial',
      'https://www.linkedin.com/company/kryptokrona',
      'https://github.com/kryptokrona'
    ],
  }
</script>

<svelte:head>
  {@html serializeSchema(seoData)}
</svelte:head>
