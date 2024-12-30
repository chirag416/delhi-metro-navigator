import React from 'react';
import { MapPin, ArrowRightCircle, Flag, MapPinOff, Repeat } from 'lucide-react';

// Utility function for line colors
const getLineColor = (line) => {
    const lineColors = {
        aqua: '#00FFFF',
        blue: '#0000FF',
        green: '#008000',
        magenta: '#FF00FF',
        orange: '#FFA500',
        pink: '#FFC0CB',
        red: '#FF0000',
        violet: '#EE82EE',
        yellow: '#FFFF00',
    };

    return lineColors[line?.toLowerCase()] || '#333333';
};

// Route Display Component
const RouteDisplay = ({ path }) => {
    if (!path || path.length === 0) {
        return (
            <p className="text-center text-gray-500 mt-4">
                No route to display. Please search for a valid route.
            </p>
        );
    }

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 mt-6">
            <h2 className="text-2xl font-bold mb-4 text-center">🚦 Metro Route Details</h2>
            <div className="flex flex-col space-y-4">

                {path.map((node, index) => {
                    const isTransitPoint =
                        index > 0 &&
                        node.line &&
                        path[index - 1].line &&
                        node.line !== path[index - 1].line;

                    return (
                        <div key={index} className="flex items-center gap-4 relative">
                            {/* Station Indicator */}
                            {index === 0 ? (
                                <MapPin size={24} className="text-green-500" />
                            ) : index === path.length - 1 ? (
                                <Flag size={24} className="text-red-500" />
                            ) : isTransitPoint ? (
                                <Repeat size={24} className="text-yellow-500" />
                            ) : (
                                <ArrowRightCircle size={20} className="text-gray-400" />
                            )}

                            {/* Station Name */}
                            <span className="text-lg font-semibold">{node.station}</span>

                            {/* Line Badge */}
                            {node.line && (
                                <span
                                    className="text-sm font-medium px-2 py-1 rounded-md"
                                    style={{
                                        backgroundColor: getLineColor(node.line),
                                        color: 'white',
                                    }}
                                >
                                    {node.line}
                                </span>
                            )}

                            {/* Transition Indicator */}
                            {isTransitPoint && (
                                <div className="text-sm font-semibold text-yellow-600 ml-4">
                                    🚉 Transit Point: Line Change
                                </div>
                            )}

                            {/* Direction Arrow */}
                            {index < path.length - 1 && (
                                <ArrowRightCircle size={18} className="text-gray-500 ml-2" />
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default RouteDisplay;
