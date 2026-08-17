import { LightVM, Capability } from 'lightvm';

const vm = new LightVM({ caps: [Capability.Control, Capability.Observe] })
  .withHint(true)
  .withExplain(true);

const bytecode = [
  ['val', 'result'],
  ['push', 5],
  ['push', 5],
  ['mul', 'int'],
  ['push', 10],
  ['sub', 'int'],
  ['set', 'result'],
  ['push', 'Result is: '],
  ['get', 'result'],
  ['concat'],
  ['println'],
];

const tools = vm.tools();

const optimized = tools.optimizeBytecode(bytecode);
vm.load(optimized).run();
