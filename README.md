# artillery_load_test

Currently Artillery.io requires a node version >= 16.15.0.

Run <code>yarn install</code> to download all dependencies.

Set the target env, test duration, and arrival rate:
<pre>
  <code>export TARGET=https://feature12.qa.spokeo.com DURATION=1 ARRIVAL_RATE=1</code>
</pre>

Run the test:
<pre>
  <code>artillery run config.yml</code>
</pre>
