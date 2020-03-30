const SDK_METRIC_PREFIX = '~sdk.javascript';

const SPAN_LOG_KEY = '_spanLogs';

// Define static class properties
const WAVEFRONT_METRIC_FORMAT = 'wavefront';
const WAVEFRONT_HISTOGRAM_FORMAT = 'histogram';
const WAVEFRONT_TRACING_SPAN_FORMAT = 'trace';
const WAVEFRONT_SPAN_LOG_FORMAT = 'spanLogs';

const NULL_TAG_VAL = 'none';

// Tag key for defining an application.
const APPLICATION_TAG_KEY = 'application';

// Tag key for defining a cluster.
const CLUSTER_TAG_KEY = 'cluster';

// Tag key for defining a shard.
const SHARD_TAG_KEY = 'shard';

// Tag key  for defining a service.
const SERVICE_TAG_KEY = 'service';

// Tag key for defining a component.
const COMPONENT_TAG_KEY = 'component';

// Heart beat interval.
const HEART_BEAT_INTERVAL = 10;

module.exports = {
  SDK_METRIC_PREFIX,
  SPAN_LOG_KEY,
  WAVEFRONT_METRIC_FORMAT,
  WAVEFRONT_HISTOGRAM_FORMAT,
  WAVEFRONT_TRACING_SPAN_FORMAT,
  WAVEFRONT_SPAN_LOG_FORMAT,
  APPLICATION_TAG_KEY,
  CLUSTER_TAG_KEY,
  SHARD_TAG_KEY,
  SERVICE_TAG_KEY,
  COMPONENT_TAG_KEY,
  NULL_TAG_VAL,
  HEART_BEAT_INTERVAL
};
