import { parseSubscriptions, parseScopedMetrics, parseCoreMetrics } from './controller';

// Class containing Tableau Pulse core metrics with minimal data for the frontend
class Metrics {
  constructor(session, subscriptions, coreMetrics) {
    this.session = session;
    this.subscriptions = this.parseSubscriptions(subscriptions);
    // this.scoped_metrics = this.parseScopedMetrics(scopedMetrics);
    this.core_metrics = this.parseCoreMetrics(coreMetrics);
  }

  // data utilities defined in controller.js
  parseSubscriptions = parseSubscriptions;
  parseScopedMetrics = parseScopedMetrics;
  parseCoreMetrics = parseCoreMetrics;
}

export default Metrics;
