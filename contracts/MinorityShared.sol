// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;


/**
 * Stores constant shared between the token and liquidity manager contracts
 * Prevents accidental mismatches between contracts
 */
contract MinorityShared {
    address constant public USDC = 0x00D06725663411E6D4599F0B630AB003d4290ebA; // Polygon USDC Mainnet address
    address constant public ROUTER = 0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff; // Quickswap Router address: 0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff
}