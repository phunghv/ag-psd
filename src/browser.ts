import { Psd, ReadOptions, WriteOptions } from './psd';
import { PsdWriter, writePsd as writerPsdInternal, getWriterBuffer, createWriter } from './psdWriter';
import { PsdReader, readPsd as readPsdInternal, createReader } from './psdReader';
export {
	ColorMode, ChannelID, Compression, SectionDividerType, Color, LayerEffectsShadowInfo, LayerEffectsOuterGlowInfo,
	LayerEffectsInnerGlowInfo, LayerEffectsBevelInfo, LayerEffectsSolidFillInfo, LayerEffectsInfo, LayerAdditionalInfo,
	ResolutionUnit, SizeUnit, ImageResources, Layer, Psd, ReadOptions, WriteOptions
} from './psd';
export { PsdReader, PsdWriter };

export function readPsd(buffer: ArrayBuffer, options?: ReadOptions): Psd {
	const reader = createReader(buffer);
	return readPsdInternal(reader, options);
}

export function writePsd(psd: Psd, options?: WriteOptions): ArrayBuffer {
	const writer = createWriter();
	writerPsdInternal(writer, psd, options);
	return getWriterBuffer(writer);
}
